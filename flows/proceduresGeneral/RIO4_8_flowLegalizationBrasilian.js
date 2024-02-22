
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('48')
    .addAnswer(
        ['LEGALIZACIÓN DE HISTÓRICO ESCOLAR BRASILERO PARA REGISTRO EN BOLIVIA',
            'Requisitos: 👇',
            '● El histórico escolar original emitido por la unidad educativa debe estar debidamente firmado por los responsables de dicha unidad.',
            '● Solicitar a la escuela la dirección del cartório para realizar la firma reconocida del responsable que figura en el histórico escolar ',
            '● Solicitar la dirección de la Directoria de Ensino a la que pertenece esta unidad educativa, para realizar la legalización del histórico escolar en esta dirección.',
            '● Realizar la apostilla del CONVENIO DE LA HAYA en cualquier cartório autorizado.',
            '',
            'Una vez realizados todos los pasos el histórico escolar puede ser enviado a Bolivia, sin necesidad de pasar por el Consulado General del Estado Plurinacional de Bolivia en São Paulo',
            '',
            'Observación:',
            'La traducción puede ser realizada por traductor público juramentado en territorio brasilero o en territorio boliviano']
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

