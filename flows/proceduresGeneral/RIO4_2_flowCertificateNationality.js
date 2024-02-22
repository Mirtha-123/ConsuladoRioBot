
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('42')
    .addAnswer(
        ['CERTIFICADO DE NACIONALIDAD (Inscripción Consular)',
            '',
            'Para  la solicitud de este trámite será necesario 👇:',
            '',
            '●  Documento de identidad vigente (ORIGINAL y fotocopia)',
            '●  Certificado de nacimiento (fotocopia)',
            '●  2 fotografías 3X4 fondo Blanco',
            '●   Comprobante de Residencia (Fotocopia del recibo de luz, agua o teléfono)',
            '●   Depósito bancario de acuerdo a tasa arancelaria',
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

