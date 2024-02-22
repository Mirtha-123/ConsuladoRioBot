const BotWhatsaap = require('@bot-whatsapp/bot');
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const { getImagesRepo } = require('./../../services/firebase/images.js');
const { CargarData, LeerData, ConsultarStatusSolicitud } = require('../../services/cloudStorage/index.js');


module.exports = BotWhatsaap.addKeyword('B')
    .addAnswer(['Escribe el *codigo asignado* ejemplo("44DR88")?'],
        { capture: true }, async (ctx, { gotoFlow, state, provider, fallBack, endFlow }) => {
            const data = await state.getMyState()
      
            if (data) {
                await state.update({ contador: data.contador + 1 })
            } else {

                await state.update({ contador: 1 })
            }

           
            const tramite = await ConsultarStatusSolicitud(convertirAMayusculas(ctx.body))


            console.log(tramite)
            if (tramite) {
                switch (tramite.status) {
                    case 'nuevo':
                        await provider.sendText(`${ctx.from}@c.us`, 'Tu tramite esta en *proceso*.🧐🧐😉')
                        await provider.sendText(`${ctx.from}@c.us`, 'Gracias por tu paciencia.')
                        break;
                    case 'finished':
                        await provider.sendText(`${ctx.from}@c.us`, 'Tu tramite ya esta *listo*, puedes pasar por las oficinas del consulado a recogerlo.')
                        await provider.sendText(`${ctx.from}@c.us`, 'Te estaremos esperando.😉👍🏽')
                        await provider.sendText(`${ctx.from}@c.us`, 'Gracias por tu preferencia.')
                        break;
                    case 'rejected':
                        await provider.sendText(`${ctx.from}@c.us`, 'Tu tramite fue *observado 😟😟😟*, por lo siguientes motivos:.')
                        await provider.sendText(`${ctx.from}@c.us`, `*${tramite.motivoRechazo}*`)
                        await provider.sendText(`${ctx.from}@c.us`, `Inicie un nuevo tramite, corrigiendo lo observado.`)
                        await provider.sendText(`${ctx.from}@c.us`, `Estoy atento a tu solicitud.😃😉👍🏽`)
                        break;

                    default:
                        break;
                }
                return endFlow()
                console.log('existe')
            } else {
                console.log('esta nulo')
                await provider.sendText(`${ctx.from}@c.us`, '_Lo siento este codigo no esta en el sistema_');
                if (data) {
                    if (data.contador == 3) {
                        await provider.sendText(`${ctx.from}@c.us`, '_Vuelve cuando tengas un codigo valido._');
                        return endFlow()
                    }
                  
                }
                return fallBack()
            }


            //await state.update({ pushName: ctx.pushName, phone: ctx.from })
            //console.log(txt)*/


        })

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}