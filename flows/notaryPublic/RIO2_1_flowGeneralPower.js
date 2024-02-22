
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO2_returnBack');


module.exports = BotWhatsaap.addKeyword('23')
    .addAnswer(
        ['PODER GENERAL',
            '',
            '●   Remitir Instructiva de Poder en formato Word al correo electrónico: conbolsp@gmail.com ',
            '(Se recomienda que la instructiva sea elaborada por abogado boliviano)',
            '●  Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE DEL PODERDANTE en caso de ser de nacionalidad Brasilera presentar RG brasilero o Pasaporte',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE DEL APODERADO',
            '●   Depósito bancario de acuerdo a tasa arancelaria',
            '',
            'Para este trámite será necesario realizar agendamiento en el sitio',
            '',
            'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70']
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

