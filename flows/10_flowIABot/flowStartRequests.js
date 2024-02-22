const BotWhatsaap = require('@bot-whatsapp/bot');
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const { getImagesRepo } = require('./../../services/firebase/images.js');
const { CargarData, LeerData, ConsultarCuentas } = require('../../services/cloudStorage/index.js');

const flowVerifyStillHere = require('./flowVerifyStillHere.js');

module.exports = BotWhatsaap.addKeyword('A')
    .addAnswer(['Genial vamos a empezar tu tramite, cual de los siguientes tramites deseas realizar??'],
        null, async (ctx, { gotoFlow, state, provider }) => {

            const tramites = await LeerData()

            const txt = construirCadenaTramites(tramites)

            console.log(tramites)

            await provider.sendText(`${ctx.from}@c.us`, txt)
            await state.update({ pushName: ctx.pushName, phone: ctx.from })


            const cuentas = await ConsultarCuentas()
            await provider.sendText(`${ctx.from}@c.us`, 'Recuerda, que estos son los bancos donde debes hacer el deposito por tu tramite:')


            cuentas.forEach(async element => {

                await provider.sendText(`${ctx.from}@c.us`, 'Banco: *' + element.banco + '* \nNumero de Cuenta: *'
                    + element.numero + '*   \nAgencia: *' + element.agencia + '*  \nNombre: *' + element.nombre
                    + '*  \nTipo de Cuenta: *' + element.tipo + '*  \nCNPJ: *' + element.cnpj + '*')

            });
            console.log(txt)


        }).addAnswer(['😃😉'], { capture: true }, async (ctx, { gotoFlow, state }) => {
            console.log(ctx.body)
            const resp = ctx.body.trim()
            const cadenaSinEspacios = resp.replace(/\s/g, '')

            await state.update({ selectTramite: cadenaSinEspacios })
            return gotoFlow(require('./flowVerifyStillHere.js'))
            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowVerifyStillHere])


function construirCadenaTramites(tramites) {
    let cadena = 'Estos son los trámites disponibles para solicitar:\n';
    //let final = 'Por favor indicame cual quieres iniciar.'
    tramites.forEach((tramite, index) => {

        cadena += `*${index + 1}* - ${tramite.nombre}  (Precio: *${tramite.costo??0}* *${tramite.moneda??''}* )\n`;
    });


    return cadena;
}

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}