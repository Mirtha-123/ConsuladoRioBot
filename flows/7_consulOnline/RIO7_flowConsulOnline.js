const BotWhatsaap = require('@bot-whatsapp/bot');


module.exports = BotWhatsaap.addKeyword('7')
    .addAnswer(['https://www.rree.gob.bo/scel/70',
        'link directo para el Consulado en linea☝',
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