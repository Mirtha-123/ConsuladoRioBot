const BotWhatsaap = require('@bot-whatsapp/bot');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(['Esperamos haberte podido ayudar que tengas un gran dia.'
    ])
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {
        console.log('OK AQUI ESTAMOS')
        try {
            const getMenu = await googelSheet.recuperarInfo();
            console.log(getMenu)
        } catch (error) {
            console.log(error)
        }




    })
