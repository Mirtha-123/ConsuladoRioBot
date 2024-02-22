
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');

module.exports = BotWhatsaap.addKeyword('16')
    .addAnswer(
        [' REGISTRO DE DOBLE NACIONALIDAD - GRATUITO',
            'Menores de Cero(0) hasta Once(11) años ',
            '',
            '●   Fotocopia a color Autenticado del Certificado de Nacimiento brasileño. ',
            '● Traducción al español del Certificado de Nacimiento brasileño',
            'Por traductor juramentado, buscar en: www.atpiesp.org.br',
            'o por el Consulado – Arancel: T1',
            '●   Fotocopia del RG(Registro General) del menor',
            '●   Fotocopia del Certificado de Nacido Vivo o declaración otorgada por la clínica y / o hospital(este requisito es opcional)',
            '●   Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE de los padres',
            '●   Fotocopia del Certificado de matrimonio de los padres, si fueran casados',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE de dos testigos para la inscripción del menor.',
            'Si el testigo es brasileño deberá presentar RG(Registro General) con foto actual',
            '●   Formulario de Inscripción de Nacimiento otorgado por el Consulado',
            '',
            'Para solicitar este trámite deberá agendarse en el site',
            '',
            'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70',
            '',
            'El día del Agendamiento deberán estar presentes, uno de los padres, dos testigos y la presencia del inscrito.']
    ).addAnswer(
        [
            'PARA LA INSCRIPCIÓN DE NACIMIENTO DE DOBLE NACIONALIDAD DE',
            '(Personas mayores a 12 años)',
            '',
            '●   El Certificado de Nacimiento brasileño original debe estar Apostillado',
            'https://souportugal.com/relacao-de-cartorios-brasileiros-aptos-a-realizar-o-apostilamento/',
            '● Traducción al español del Certificado de Nacimiento brasileño',
            'Por traductor juramentado, buscar en: www.atpiesp.org.br',
            'o por el Consulado – Arancel:  T1',
            '●   Fotocopia del RG (Registro General) del menor',
            '●   Fotocopia del Certificado de Nacido Vivo o declaración otorgada por la clínica y/o hospital (este requisito es opcional)',
            '●   Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE de los padres',
            '●   Certificado de Nacimiento (ORIGINAL) de los padres. ',
            '●   Certificado de matrimonio de los padres (ORIGINAL), si fueran casados',
            '●   Fotocopia de la Cédula de Identidad boliviana VIGENTE de dos testigos para la inscripción del menor. ',
            'Si el testigo es brasileño deberá presentar RG (Registro General) con foto actual',
            '●   Formulario de Inscripción de Nacimiento otorgado por el Consulado',
            '●   Dos (2) fotografías con fondo blanco 4 x 4 cm del menor del cual se solicita la inscripción',
            '●   Este trámite no es Gratuito, por esto deberá presentar el comprobante de depósito equivalente a la tasa arancelaria de $US 15,00(para Adolescentes entre 12 a 17 Años) y $US 20,00(para mayores de  17 Años).',
            '',
            'Para solicitar este trámite deberá agendarse en el site ',
            '',
            'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70',
            '',
            'El día del Agendamiento deberán estar presentes, uno de los padres, dos testigos y la presencia del inscrito.'

        ]
    ).addAnswer(
        [
            'https://portalmre.rree.gob.bo/AtencionCitas/CitaPrevia.aspx?c=70',
            'link directo para el agendamiento☝'

        ]
    ).addAnswer(
        [
            'https://youtu.be/miSpiGyjG80',
            'Video explicando como realizar el agendamiento'

        ]
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })