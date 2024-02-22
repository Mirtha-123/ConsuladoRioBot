
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO2_returnBack');


module.exports = BotWhatsaap.addKeyword('21')
    .addAnswer(
        ['PODERES ESPECIALES',
            '',
            'PODER PARA AUTORIZACIÓN DE VIAJE DE UN MENOR',
            '',
            '●   Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE DEL PODERDANTE (padre, madre o ambos)',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE DEL APODERADO (Responsable del menor)',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE DEL MENOR / MENORES',
            '●   Depósito bancario de acuerdo a tasa arancelaria',
            '',
            'Para este trámite será necesario realizar agendamiento en el sitio ',
            '',
            'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70']
    ).addAnswer(
        [
            'PODER PARA COBRO DE PENSIONES SENASIR O AFPS',
            '',
            '●   Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE DEL PODERDANTE (beneficiario de la renta)',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE DEL APODERADO',
            '●   Depósito bancario de acuerdo a tasa arancelaria',
            '',
            'Para este trámite no es necesario realizar agendamiento',
        ]
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })

