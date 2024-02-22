
const BotWhatsaap = require('@bot-whatsapp/bot');
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const { getImagesRepo } = require('./../../services/firebase/images.js');
const flowSingleReq = require('./flowSingleReq');
const { CargarData, LeerData } = require('../../services/cloudStorage/index.js');
//const flowFinal = require('./flowEnd');
const { generarValorAleatorio } = require('../../utils/random.js');


module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['Muchas gracias, eso es suficiente', 'Procesare tu solicitud, dame unos segundos....🖥️💻🥸'],
        null,
        async (ctx, { gotoFlow, state, provider,endFlow }) => {
            try {

                const num = await generarValorAleatorio()
                await state.update({ codigoTramite: num })
                const data = state.getMyState()
                console.log('FINAL', data)


                await CargarData(data)
                await provider.sendText(`${ctx.from}@c.us`, `Tu codigo asignado es el siguiente: *${num}*, con el puedes consultar el estado de tu tramite.`)
                await provider.sendText(`${ctx.from}@c.us`, `Este tipo de tramite tiene un tiempo estimado para su entrega *${data.cantidadTiempo}* *${data.tipoCantidad}*, en oficinas del Consulado`)
                await provider.sendText(`${ctx.from}@c.us`, `Puede hacer seguimiento a tu tramite con el codigo asignado.`)
                await provider.sendText(`${ctx.from}@c.us`, `Marcando la opcion *B*.`)
                await provider.sendText(`${ctx.from}@c.us`, `Gracias por tu colaboración.`)
                return endFlow()
            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }, []
    )
