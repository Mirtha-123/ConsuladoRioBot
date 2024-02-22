
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('43')
    .addAnswer(
        ['RENOVACION DEL PASAPORTE: PROXIMO AL VENCIMIENTO, CADUCADO, CORRECCION DE DATOS, EXTRAVIADO, HOJAS AGOTADAS o DETERIORADO',
            'Requisitos: 👇',
            '●  Carta con redacción propia, dirigida al Consulado General solicitando la emisión de un nuevo pasaporte',
            '●  Fotocopia colorida de la cedula de identidad boliviana - VIGENTE',
            '●  Fotocopia colorida del pasaporte a ser substituido – hojas donde está la fotografía y datos personales',
            '●  La entrega del pasaporte demora en promedio 25 días después de la captura de datos. ',
            '●  Pago de tasa arancelaria del día, equivalente en Reales Brasileños  ',
            '',
            'OBSERVACIONES. - ',
            'Se puede renovar hasta 6 meses antes de la fecha de vencimiento',
            'En caso de Pérdida o extravío del Pasaporte, se deberá presentar el “Boletín de Ocurrencia”',
            'Para corrección de datos: C.I. actualizado con los cambios o certificado de Registro Cívico correspondiente',
            '',
            'Para este trámite será necesario realizar agendamiento en el sitio ',
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

