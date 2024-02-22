
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');



module.exports = BotWhatsaap.addKeyword('14')
    .addAnswer(
        ['La Homologación de un Matrimonio realizado en cartório brasileño debe presentar los siguientes requisitos.',

        '●   Carta Simple de Solicitud dirigida al Cónsul General del Estado Plurinacional de Bolivia en São Paulo – Brasil, solicitando el registro extranjero de matrimonio, la misma que deberá ser y firmada por ambos contrayentes.',
        '●   Copia simple de la Cedula de Identidad Boliviana(vigente) y fotocopia a color autenticada del RG en caso de que uno de los contrayentes sea brasilero.',
        '●   Fotocopia del certificado de nacimiento de los novios; en caso de que uno de los contrayentes sea brasilero debe presentar fotocopia a color autenticada y original de la traducción juramentada del documento.',
        '●   Certificado de matrimonio brasilero – Original(actualizado) y traducción juramentada del mismo(original), ambos   APOSTILLADOS EN CARTORIO BRASILERO AUTORIZADO.',
        '●   Fotocopia de la cédula de identidad de dos testigos(un testigo para el novio y un testigo para la novia).',
        '●   Fotocopia de un comprobante de residencia de los novios.',
        '●   Llenar el Formulario de datos complementarios para el registro de Matrimonio.',
        '●   Depósito bancario correspondiente de la tasa arancelaria.',
        
        'Portando todos los requisitos deberá marcar la fecha para la homologación del matrimonio sujeto a disponibilidad en agenda(ESTE AGENDAMIENTO ES PRESENCIAL)',
        
        'Ambos contrayentes y testigos deberán presentarse en el Consulado para la firma de libros, portando sus documentos de identidad el día agendado.']
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })