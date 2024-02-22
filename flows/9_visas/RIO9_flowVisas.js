const BotWhatsaap = require('@bot-whatsapp/bot');


module.exports = BotWhatsaap.addKeyword('9')
    .addAnswer(['VISAS',
        '',
        'Requisitos para la emisión de visas. ',
        '',
        '1. Requisitos generales: ',
        '●  Formulario de declaración jurada de solicitud de visa: http://www.rree.gob.bo/formvisas/ ',
        '●  Pasaporte con vigencia mínima de seis (6) meses;',
        '●  Certificado de vacunación contra la fiebre amarilla y/u otra certificación de salud, si corresponde; ',
        '●  Fotografía actual; 3 x 4 fondo blanco – dos (2) ',
        '●  Constancia de pago del costo del trámite correspondiente, excepto las otorgadas en virtud de acuerdos o convenios estatales.',
        '',
        '2. Requisitos específicos:',
        '',
        'Visa en tránsito:',
        '     Pasajes que acrediten que su destino final es un tercer país.',
        '',
        'Visa de cortesía: ',
        'Invitación de institución pública del estado boliviano, a través del Ministerio de Relaciones Exteriores. ',
        ' ',
        'Visa de turismo o visita:  ',
        'Itinerario de viaje, carta de invitación de persona con domicilio legal en Bolivia o reserva de hospedaje; Solvencia económica acreditada mediante declaración jurada respaldada documentalmente.',
        ' ',
        'Visa de objeto determinado: ',
        'Documentación que acredite la actividad que desarrollará en el territorio boliviano y/o carta de invitación de la entidad o empresa con documentación de respaldo en los casos que corresponda; ',
        '',
        'Certificado vigente que acredite que la persona extranjera no tiene antecedentes penales y/o policiales, expedidos por autoridad competente en el país de origen conforme ',
        '',
        'Solvencia económica acreditada mediante declaración jurada respaldada documentalmente',
        '',
        'Visa múltiple: ',
        'Documentación legalizada de Constitución de la Empresa a la que representa en su país de origen o residencia;',
        '',
        'Fotocopia legalizada del Número de Identificación Tributaria – NIT o certificación electrónica original en caso de que la empresa haya sido constituida en territorio boliviano;',
        '',
        'Certificado vigente de antecedentes expedido por INTERPOL.',
        '',
        'No olvide agendar su cita ',
        '',
        'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70',
    ]).addAnswer('Si desea regresar al menú principal digite #0.',
    { capture: true }, async (ctx, { gotoFlow }) => {
        console.log(ctx.body)
        if (ctx.body == 0) {
            return gotoFlow(require('./../flowPrincipal'))
        }
        // el número de telefono se envía en este formato 12345678901@c.us
    }
    , [
    ])