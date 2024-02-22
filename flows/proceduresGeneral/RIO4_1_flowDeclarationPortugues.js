
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('41')
    .addAnswer(
        ['DECLARACIONES EN PORTUGUÉS DE EQUIVALENCIA DE ESTUDIOS',
            '',
            'Para solicitar este trámite es necesario 👇:',
            '',
            '●  Documento de identidad vigente(ORIGINAL y fotocopia)',
            '●  Libretas escolares(ORIGINAL y fotocopia)',
            '●  Certificado de nacimiento(fotocopia)',
            '●   Depósito bancario correspondiente a la tasa arancelaria en Reales',
            '',
            'No es necesario realizar agendamiento']
    )
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })

