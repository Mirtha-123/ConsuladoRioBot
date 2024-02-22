
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');

module.exports = BotWhatsaap.addKeyword('13')
    .addAnswer(
        ['La celebración de matrimonio requiere de los siguientes requisitos:',
            '●   Fotocopia de la Cédula de Identidad Boliviana(Vigente) de los novios, o RG en caso de que alguno sea brasilero(fotocopia a color y autenticada). ',
            '●   Fotocopia de la Cédula de identidad de los testigos(un testigo para el novio y un testigo para la novia)',
            '●   Si el novio o la novia son de ciudadanía brasilera debe presentar certificado de soltero y si fuera divorciado o divorciada debe presentar  la sentencia de divorcio. (documento emitido en español o traducción juramentada APOSTILLADO  EN CARTORIO BRASILERO AUTORIZADO)',
            '●   Fotocopia del certificado de nacimiento de los novios(si el contrayente es extranjero fotocopia autenticada y a color acompañada de la traducción juramentada, ambos  APOSTILLADOS  EN CARTORIO BRASILERO AUTORIZADO)',
            '●   Fotocopia de un comprobante de residencia de los novios',
            '●   Llenar el Formulario de solicitud de celebración de Matrimonio, proporcionado por el Consulado.',
            '●   Depósito bancario correspondiente a la tasa arancelaria en Reales',
            'Para agendar el matrimonio deben estar presentes ambos contrayentes y deben realizarlo con antecedencia.',
            'El día del matrimonio, deberán presentarse una hora antes del horario marcado, portando los documentos de identidad originales(tanto los novios como los testigos).',
            'Para cancelar la fecha de matrimonio se debe dar aviso al consulado mínimamente con 48 horas de anticipación.',
            'El agendamiento es personal']
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })