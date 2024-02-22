
const BotWhatsaap = require('@bot-whatsapp/bot');
const RIO4_1_flowDeclarationPortugues = require('./RIO4_1_flowDeclarationPortugues');
const RIO4_2_flowCertificateNationality = require('./RIO4_2_flowCertificateNationality');
const RIO4_3_flowPassportApplication = require('./RIO4_3_flowPassportApplication');
const RIO4_4_flowPassportApplicationMiniorsAge = require('./RIO4_4_flowPassportApplicationMiniorsAge');
const RIO4_5_flowPassportApplicationFirstTime = require('./RIO4_5_flowPassportApplicationFirstTime');
const RIO4_6_flowSafePassage = require('./RIO4_6_flowSafePassage');
const RIO4_7_flowCertificationValidate = require('./RIO4_7_flowCertificationValidate');
const RIO4_8_flowLegalizationBrasilian = require('./RIO4_8_flowLegalizationBrasilian');


//const flowApprovalOfDeath = require('./civilRegister/flowApprovalOfDeath');

module.exports = BotWhatsaap.addKeyword('4')
    .addAnswer(['Todos los trámites son personales y/o realizados por familiares de primer grado.',
        '',
        'Para saber más acerca de los requisitos elige una opción 👇:',
        '',
        '4️⃣1️⃣ Declaraciones en Portugués de equivalencia de estudios',
        '4️⃣2️⃣ Certificado de Nacionalidad(Inscripción Consular)',
        '4️⃣3️⃣ Solicitud de Pasaporte – Renovación',
        '4️⃣4️⃣ Solicitud de Pasaporte – Menores de 18 años',
        '4️⃣5️⃣ Solicitud de Pasaporte – Por Primera Vez',
        '4️⃣6️⃣ Salvoconducto',
        '4️⃣7️⃣ Certificación de Datos de Licencia de Conducir Boliviana Vigente y su Traducción al Portugués',
        '4️⃣8️⃣ Legalización de histórico escolar brasilero para registro en Bolivia',
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
            RIO4_1_flowDeclarationPortugues, RIO4_2_flowCertificateNationality, RIO4_3_flowPassportApplication, RIO4_4_flowPassportApplicationMiniorsAge,
            RIO4_5_flowPassportApplicationFirstTime, RIO4_6_flowSafePassage, RIO4_7_flowCertificationValidate, RIO4_8_flowLegalizationBrasilian
        ])
