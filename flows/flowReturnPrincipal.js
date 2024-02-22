
const BotWhatsaap = require('@bot-whatsapp/bot');



module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['Si desea regresar al menú principal digite #0 , digite salir para finalizar.'],
        { capture: true },
        async (ctx, { gotoFlow, state }) => {
            try {
                console.log(ctx.body)
                if (ctx.body == 0) {
                    return gotoFlow(require('./flowPrincipal'))
                } else if (ctx.body == 0) {
                    return gotoFlow(require('./flowPrincipal'))
                } else {

                }
            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        },
    )


