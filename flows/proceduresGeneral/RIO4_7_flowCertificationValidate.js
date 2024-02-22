
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('47')
    .addAnswer(
        ['CERTIFICACIÓN DE DATOS DE LICENCIA DE CONDUCIR BOLIVIANA VIGENTE / VENCIDA Y SU TRADUCCIÓN AL PORTUGUÉS ',
            '●  Dos fotocopias a color de la cedula de identidad VIGENTE del  interesado',
            '●  Dos fotocopias a color de la licencia de conducir boliviana VIGENTE / VENCIDA ',
            '●  Dos formularios de solicitud,(otorgados por el consulado general). ',
            '',
            'Se entregará una certificación de datos de licencia de conducir en español de carácter GRATUITO. ',
            'Adjunto acompaña una traducción consular al portugués con los valores respectivos de acuerdo a ARANCEL CONSULAR.',
            'Toda solicitud de certificación se procesará en 48 horas posteriores a la recepción del trámite.',
            '',
            'Observación: ',
            'Se realizaran certificaciones de la licencia boliviana VENCIDA con maximo de 5 años de vencimiento ',
            'La renovación de la licencia de conducir solo puede ser realizada en BOLIVIA',
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

