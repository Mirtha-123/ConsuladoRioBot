
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('45')
    .addAnswer(
        ['SOLICITACION DE PASAPORTE POR PRIMERA VEZ MAYORES DE 18 AÑOS',
            'Requisitos:👇',
            '',
            ' ●  Carta con redacción propia, dirigida al Consulado General solicitando la emisión de un nuevo pasaporte',
            ' ●  Fotocopia colorida de la cedula de identidad boliviana - VIGENTE',
            ' ●  Fotocopia del certificado de nacimiento actualizado.',
            ' ●  La entrega del pasaporte demora en promedio 25 días después de la captura de datos. ',
            ' ●  Pago de tasa arancelaria del día, equivalente en Reales Brasileños  ',
            ' ',
            'OBSERVACIONES. - ',
            '',
            'Para este trámite será necesario realizar agendamiento en el sitio ',
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

