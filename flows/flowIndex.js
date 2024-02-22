const BotWhatsaap = require('@bot-whatsapp/bot');
const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')
const fs = require("fs");

const flowReturn = require('./flowReturn');
const flowPrincipal = require('./flowPrincipal');
const RIO2_returnBack = require('./notaryPublic/RIO2_returnBack');
const flowEnd = require('./flowEnd');
const { downloadMediaMessage, getDevice } = require('@whiskeysockets/baileys');
const RIO4_returnBack = require('./proceduresGeneral/RIO4_returnBack');
const RIO5_returnBack = require('./5_administrativeProcedures/RIO5_returnBack');
const RIO8_returnBack = require('./8_customsImmigrations/RIO8_returnBack');
const flowReturnPrincipal = require('./flowReturnPrincipal');
// RECIBE IMAGENES
/*const flowRecibidor = addKeyword('10').addAnswer(['estamos listos'], { sensitive: true })
    .addAction({ capture: true }, async (ctx) => {
        try {

            const buffer = await downloadMediaMessage(ctx, "buffer");
            await fs.writeFileSync('./file.jpeg', buffer)
        } catch (error) {
            console.log(error)
        }
    });*/
module.exports = BotWhatsaap.createFlow(
    [
        //flowRecibidor,
        flowPrincipal,
        //flowReturn,
       // RIO2_returnBack,
        //flowEnd,
        //RIO4_returnBack,
        //RIO5_returnBack,
        //RIO8_returnBack,
       // flowReturnPrincipal
    ]
)