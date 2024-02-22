const BotWhatsaap = require('@bot-whatsapp/bot');
const RIO5_1_flowAdministrativeProcedure = require('./RIO5_1_flowAdministrativeProcedure');
const RIO5_2_flowExperiences = require('./RIO5_2_flowExperiences');


module.exports = BotWhatsaap.addKeyword('5')
    .addAnswer(['Todos los trámites son personales y/o realizados por familiares de primer grado.',
        '',
        ' Para saber más acerca de los requisitos elige una opción 👇:',
        '',
        '5️⃣1️⃣ Trámites Administrativos ',
        '5️⃣2️⃣ Vivencias',
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
        , [RIO5_1_flowAdministrativeProcedure, RIO5_2_flowExperiences
        ])