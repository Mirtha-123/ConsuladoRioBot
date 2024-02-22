
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');


module.exports = BotWhatsaap.addKeyword('15')
    .addAnswer(
        [' Una Defunción registrada en cartório brasileño puede ser Homologada presentando los siguientes requisitos.',
            '●   Carta Simple de Solicitud dirigida al Cónsul General del Estado Plurinacional de Bolivia en São Paulo – Brasil, solicitando el registro, la misma que deberá ser solicitada y firmada por el declarante.',
            '●   Copia simple de la Cédula de Identidad Boliviana del fallecido',
            '●   Fotocopia simple del certificado de nacimiento actualizado del fallecido',
            '●   Certificado de defunción brasilero – Original(actualizado) y traducción juramentada del mismo(original), ambos   APOSTILLADOS EN CARTORIO BRASILERO AUTORIZADO.',
            '●   Fotocopia de la Cédula de identidad del declarante y de dos testigos',
            '●   Depósito bancario correspondiente a la tasa arancelaria en Reales.',

            'Tanto el declarante como los testigos deberán presentarse en el Consulado para la firma de libros, portando sus documentos de identidad vigentes.']
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })

