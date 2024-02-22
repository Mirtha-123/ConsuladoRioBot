
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');


module.exports = BotWhatsaap.addKeyword('17')
    .addAnswer(
        [' EL registro de datos en la Libreta Familiar es GRATUITO requiere los siguientes requisitos:',
            '',
            '●   Certificado de Nacimiento Boliviano de los hijos que serán registrados (fotocopia).',
            '●   Libreta Familiar (ORIGINAL)',
            '●   Documento de identidad vigente (ORIGINAL y fotocopia)',
            '',
            '',
            'Para este trámite no es necesario realizar agendamiento']
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })