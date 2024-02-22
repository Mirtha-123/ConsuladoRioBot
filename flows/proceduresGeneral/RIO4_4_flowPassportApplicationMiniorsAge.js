
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('44')
    .addAnswer(
        ['RENOVACION DEL PASAPORTE MENORES DE 18 AÑOS: PROXIMO AL VENCIMIENTO, CADUCADO, CORRECCION DE DATOS, EXTRAVIADO, HOJAS AGOTADAS o DETERIORADO',
            'Requisitos:👇',
            '●  Carta con redacción propia, dirigida al Consulado General solicitando la emisión de un nuevo pasaporte firmada por el tutor legal del menor',
            '●  Fotocopia a color de la Cédula de Identidad boliviana - VIGENTE del menor',
            '●  Fotocopia a color del pasaporte a ser substituido – hojas donde está la fotografía y datos personales',
            '●  La entrega del pasaporte demora en promedio 25 días después de la captura de datos. ',
            '●  Presencia obligatoria de ambos padres con Cedula de identidad o Pasaporte vigente (Original y Fotocopias)',
            '●  En caso de fallecimiento de uno de los padres, presentar certificado de defunción.',
            '●  En caso de ausencia de uno de los padres, poder especial notariado apostillado donde el padre ausente autorice de manera expresa la tramitación del Pasaporte o Sentencia Judicial autorizando el trámite. ',
            '●  Pago de tasa arancelaria del día, equivalente en Reales Brasileños  ',
            '',
            'OBSERVACIONES. - ',
            'Se puede renovar hasta 6 meses antes de la fecha de vencimiento',
            'Em caso de Pérdida o extravío del Pasaporte, se deberá presentar el “Boletín de Ocurrencia”',
            'Para corrección de datos: C.I. actualizada con los cambios o certificado de Registro Cívico correspondiente',
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

