
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO4_returnBack');


module.exports = BotWhatsaap.addKeyword('46')
    .addAnswer(
        ['SALVOCONDUCTO',
            'TRAMITE GRATUITO',
            '',
            'Para la solicitud de este trámite será necesario la presencia del solicitante portando los siguientes requisitos 👇:',
            '',
            '●  Cédula de identidad Boliviana o pasaporte vencido (ORIGINAL y fotocopia)',
            '●  Pasaje de retorno a Bolivia comprado y confirmado ',
            '●  2 fotografías 3X4 fondo Blanco',
            '',
            ' Observaciones:',
            ' Este trámite será realizado únicamente para retorno a Bolivia, reemplazará el documento de viaje durante el ingreso a territorio Boliviano',
            ' Es válido para un único ingreso',
            '',
            ' No es necesario realizar agendamiento']
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

