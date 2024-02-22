const BotWhatsaap = require('@bot-whatsapp/bot');


module.exports = BotWhatsaap.addKeyword('6')
    .addAnswer(['Comunicamos que este trámite es realizado de manera personal   y los requisitos son 👇: ',
        '',
        '●  Certificado de MATRIMONIO – opcional solo si se encuentra casado',
        '●   Certificado de DEFUNCIÓN del conjugue - opcional solo en caso de ser viudo(a)',
        '●   Título Profesional en provisión nacional – opcional',
        '●   Certificado de NACIMIENTO - solo si la última renovación de la cédula de identidad fue anterior al año 2012',
        '●   En caso de ser menor de edad deberá estar acompañado de uno de los padres portando su carnet de identidad boliviano VIGENTE',
        '●   Depósito bancario de acuerdo a tasa arancelaria',
        '●   Es requerida la presencia del solicitante para la colecta de las huellas, firma y fotografía.',
        '',
        'Para este trámite será necesario realizar agendamiento en el sitio ',
        '',
        'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70',
    ]).addAnswer(
        'Si desea regresar al menú principal digite #0.',
        { capture: true }, async (ctx, { gotoFlow }) => {
            console.log(ctx.body)
            if (ctx.body == 0) {
                return gotoFlow(require('./../flowPrincipal'))
            }
            // el número de telefono se envía en este formato 12345678901@c.us
        }
        , [
        ])