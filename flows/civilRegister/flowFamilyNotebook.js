
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');


module.exports = BotWhatsaap.addKeyword('12')
    .addAnswer(
        ['  El duplicado de la libreta familiar se realiza solo para matrimonios celebrados en el Consulado General, para solicitarlo es necesario presentar los siguientes documentos:',
            '● Certificado de Matrimonio(fotocopia).',
            '● Libreta Familiar(fotocopia)',
            '● Documento de identidad vigente(ORIGINAL y fotocopia)',
            '● Depósito bancario correspondiente a la tasa arancelaria en Reales',

            'Este trámite no requiere de agendamiento']
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })