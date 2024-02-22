
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');



module.exports = BotWhatsaap.addKeyword('18')
    .addAnswer(
        ['Para la emisión del Certificado de No Inscripción de Partida de Matrimonio, comúnmente conocida como la Declaración de Estado Civil, requiere los siguientes requisitos:',
            '',
            '●   Certificado de Nacimiento(fotocopia)',
            '●   Documento de identidad vigente(ORIGINAL y fotocopia)',
            '●   Depósito bancario de acuerdo a tasa arancelaria',
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