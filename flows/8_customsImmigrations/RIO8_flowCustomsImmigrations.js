const BotWhatsaap = require('@bot-whatsapp/bot');
const RIO8_1_flowEntryVehicle = require('./RIO8_1_flowEntryVehicle');
const RIO8_2_flowHouseHold = require('./RIO8_2_flowHouseHold');
const RIO8_3_flowRestrictionsEntry = require('./RIO8_3_flowRestrictionsEntry');


module.exports = BotWhatsaap.addKeyword('8')
    .addAnswer(['Todos los trámites de “ADUANA” son personales.',
        '',
        'Para saber más acerca de los requisitos elige una opción 👇:',
        ' ',
        ' 8️⃣1️⃣  Ingreso de Vehículos a turismo PARA NO PROPIETARIOS DEL VEHICULO',
        ' 8️⃣2️⃣  Menaje domestico',
        ' 8️⃣3️⃣ Restricciones de ingreso a Bolívia, terrestre o aereo',
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
        , [RIO8_1_flowEntryVehicle, RIO8_2_flowHouseHold, RIO8_3_flowRestrictionsEntry
        ])