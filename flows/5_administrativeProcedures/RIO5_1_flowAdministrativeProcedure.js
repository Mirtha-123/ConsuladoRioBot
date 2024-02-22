
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO5_returnBack');


module.exports = BotWhatsaap.addKeyword('51')
    .addAnswer(
        ['Trámites Administrativos de NACIMIENTO, MATRIMONIO Y/O DEFUNCIÓN',
            'Este es un TRAMITE GRATUITO',
            'Es de naturaleza personal y/o parientes de primer grado.',
            '',
            'Para la solicitud de este trámite será necesaria la presencia del solicitante portando los siguientes requisitos 👇:',
            '',
            '●  Cédula de Identidad Boliviana o pasaporte (fotocopia) del solicitante',
            '●  En cumplimiento al procedimiento administrativo para la RECTIFICACIÓN, RATIFICACIÓN, COMPLEMENTACIÓN Y OTROS el interesado deberá presentar pruebas suficientes que justifiquen lo solicitado ante autoridades competentes del Consulado General del Estado Plurinacional de Bolivia, que pueden ser:',
            '',
            'La lista a seguir es una referencia de documentos que pueden ser presentados para comprobar lo solicitado en el trámite administrativo, no es necesario presentar todos los documentos abajo mencionados.',
            ' ',
            '●  Cédula de identidad Boliviana ',
            '●  Pasaporte (fotocopia) ',
            '●  Certificado de matrimonio',
            '●  Sentencia de divorcio',
            '●  Certificado de nacimiento antiguo',
            '●  Certificado de inscripción consular',
            '●  Certificado de defunción ',
            '●  Libreta de servicio Militar ',
            '●  Libreta de notas escolares ',
            '●  Licencia de conducir ',
            '●  Carnet de sufragio',
            '●  Certificado de nacimiento Brasilero ',
            '●  RG Brasilero',
            '●  RNE Brasilero',
            '',
            'Observaciones:',
            'El interesado deberá presentar la mayor cantidad de documentos que sea posible.',
            '',
            'Cada caso será analizado de manera individual, lo que puede causar modificación en los requisitos.',
            '',
            'No es necesario realizar agendamiento para este trámite']
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

