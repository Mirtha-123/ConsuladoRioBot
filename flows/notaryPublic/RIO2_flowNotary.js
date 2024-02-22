
const BotWhatsaap = require('@bot-whatsapp/bot');
const RIO2_1_flowSpecialPower = require('./RIO2_1_flowSpecialPower');
const RIO2_1_flowSpecialCollective = require('./RIO2_1_flowSpecialCollective');
const RIO2_1_flowGeneralPower = require('./RIO2_1_flowGeneralPower');

//const flowApprovalOfDeath = require('./civilRegister/flowApprovalOfDeath');

module.exports = BotWhatsaap.addKeyword('2', { sensitive: true })
    .addAnswer(['Comunicamos que todos los Poderes son realizados de manera personal.',
        'Para saber más acerca de los requisitos elige una opción 👇: ',
        '2️⃣1️⃣ Poderes Especiales',
        '2️⃣2️⃣ Poderes Especiales Colectivos',
        '2️⃣3️⃣ Poderes Generales',
        '',
        '',
        'Si desea regresar al menú principal digite #0.'
    ],
        { capture: true }, async (ctx, { gotoFlow }) => {
            console.log(ctx.body)
            if (ctx.body == 0) {
                return gotoFlow(require('./../flowPrincipal'))
            }
            // el número de telefono se envía en este formato 12345678901@c.us
        }
        , [
            RIO2_1_flowSpecialPower, RIO2_1_flowSpecialCollective, RIO2_1_flowGeneralPower
        ])
