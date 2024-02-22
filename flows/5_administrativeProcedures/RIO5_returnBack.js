
const BotWhatsaap = require('@bot-whatsapp/bot');


//const flowFinal = require('./flowEnd');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['Si desea regresar al menú anterior digite  #5 , menú principal digite #0 , digite salir para finalizar.'],
        { capture: true },
        async (ctx, { gotoFlow, state }) => {
            try {
                console.log(ctx.body)
                if (ctx.body == 5) {
                    return gotoFlow(require('./RIO5_flowAdministrativeProcedures'))
                } else if (ctx.body == 0) {
                    //   return gotoFlow(flowFinal)
                } else {

                }
            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        },
    )

