
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowApprovalOfDeath = require('./civilRegister/flowApprovalOfDeath');
const flowCertificateBorn = require('./civilRegister/flowCertificateBorn');
const flowDoubleNacionality = require('./civilRegister/flowDoubleNacionality');
const flowFamilyBookSimple = require('./civilRegister/flowFamilyBookSimple');
const flowFamilyNotebook = require('./civilRegister/flowFamilyNotebook');
const flowMarriageApproval = require('./civilRegister/flowMarriageApproval');
const flowNoMarriage = require('./civilRegister/flowNoMarriage');
const flowRegisterMarried = require('./civilRegister/flowRegisterMarried');
const flowReturnPrincipal = require('./flowReturnPrincipal');

//const flowApprovalOfDeath = require('./civilRegister/flowApprovalOfDeath');

module.exports = BotWhatsaap.addKeyword('1', { sensitive: true })
    .addAnswer(['Estos son los trámites de Registro Civil ', 'Para saber más acerca de los requisitos elige una opción 👇:',
        '1️⃣1️⃣ Duplicado de Certificados de Nacimiento, Matrimonio y/o Defunción',
        '1️⃣2️⃣ Duplicado de Libreta Familiar',
        '1️⃣3️⃣ Celebración de Matrimonio',
        '1️⃣4️⃣ Homologación de Matrimonio Civil',
        '1️⃣5️⃣ Homologación de Defunción',
        '1️⃣6️⃣ Registro de Nacimiento de Hijos de Ciudadanos Bolivianos (Doble Nacionalidad)',
        '1️⃣7️⃣ Registro de datos en la Libreta de Familia',
        '1️⃣8️⃣ Certificado de No Inscripción de Partida de Matrimonio (Declaración de Estado Civil)',
        '',
        '',
        'Si desea regresar al menú principal digite #0.'
    ],
        { capture: true }, async (ctx, { gotoFlow }) => {
            console.log(ctx.body)
            if (ctx.body == 0) {
                return gotoFlow(require('./flowPrincipal'))
            }
            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowApprovalOfDeath, flowCertificateBorn, flowDoubleNacionality, flowFamilyBookSimple, flowFamilyNotebook, flowMarriageApproval, flowNoMarriage, flowRegisterMarried])

