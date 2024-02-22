const BotWhatsaap = require('@bot-whatsapp/bot');
const GoogleSheetService = require('./../services/sheets/index');

const googelSheet = new GoogleSheetService(
    "188Zru7x6o4kfRyvsW7ONbDC0L52bmSKGK_4K4q10bS8"
);

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
