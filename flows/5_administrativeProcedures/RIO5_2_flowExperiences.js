
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO5_returnBack');


module.exports = BotWhatsaap.addKeyword('52')
    .addAnswer(
        ['Comunicamos que este trámite es realizado de manera personal   y los requisitos son: ',
            '',
            'Si el solicitante jubilado ya TIENE REGISTRO en este Consulado solo debe presentar👇:',
            '',
            '●   Carnet de identidad boliviano Vigente (ORIGINAL)',
            '●   Caso desee cambiar de apoderado debe presentar una copia del Documento de identidad del nuevo apoderado',
            '',
            'En caso de no contar con un registro como jubilado en este consulado deberá presentar los siguientes requisitos y REGISTRARSE POR PRIMERA VEZ👇:',
            '',
            '●   Copia y Original del Carnet de identidad boliviano VIGENTE ',
            '●   Copia de recibo de luz, agua o teléfono de su residencia en territorio brasilero',
            '●   Una fotografía fondo blanco 3X4 ',
            '●   Último recibo de pago de pensiones en Bolivia ',
            '●   Copia del documento de identidad del apoderado en Bolivia',
            '●   Copia de un comprobante de dirección del apoderado en Bolivia ',
            '',
            'Para este trámite no es necesario realizar agendamiento']
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

