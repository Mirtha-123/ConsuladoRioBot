
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowServices = require('./flowServices');
const RIO2_flowNotary = require('./notaryPublic/RIO2_flowNotary');
const flowIaBot = require('./10_flowIABot/flowIaBot');
const RIO3_flowCriminalRecord = require('./criminalRecord/RIO3_flowCriminalRecord');
const RIO4_flowProceduresGeneral = require('./proceduresGeneral/RIO4_flowProceduresGeneral');
const RIO5_flowAdministrativeProcedures = require('./5_administrativeProcedures/RIO5_flowAdministrativeProcedures');
const RIO6_flowIdentityCards = require('./6_identityCards/RIO6_flowIdentityCards');
const RIO7_flowConsulOnline = require('./7_consulOnline/RIO7_flowConsulOnline');
const RIO8_flowCustomsImmigrations = require('./8_customsImmigrations/RIO8_flowCustomsImmigrations');
const RIO9_flowVisas = require('./9_visas/RIO9_flowVisas');
const flowStartRequests = require('./10_flowIABot/flowStartRequests');
const flow_RIO_1_main = require('./12_requestsStatus/flow_RIO_1_main');
const { VerificarCodigoRequest } = require('./../services/cloudStorage/index')

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.WELCOME)
    .addAnswer(['🙌 Como estas, todo bien?', 'el *CONSULADO GENERAL DE BOLIVIA 🇧🇴 EN RIO DE JANEIRO - BRASIL 🇧🇷* te saluda'])
    .addAnswer(['HORARIO DE ATENCIÓN', 'Lunes a viernes de 08:30 a 16:30',
        'DIRECCIÓN', 'Av. Rui Barbosa 664/sala 101 - Flamengo - CEP 22250-020 - Rio de Janeiro - Brasil',
        'TELEFONOS:', ' +55 21 995434827  +55 11969699502  (55-21) 2551-1796 / 2552-5490 – ',
        'E-MAIL: consulbolrio@gmail.com',])
    .addAnswer(
        [
            'Dime que servicio requieres:',
            /*'',
            ' 1️⃣ Registro Civil / Doble Nacionalidad',
            ' 2️⃣ Notaría de Fe Pública',
            ' 3️⃣ Antecedentes Penales – REJAP',
            ' 4️⃣ Trámites en General',
            ' 5️⃣ Trámites Administrativos / Vivencias ',
            ' 6️⃣ Cédulas de Identidad -SEGIP',
            ' 7️⃣ Consulado en Línea ',
            ' 8️⃣ Aduana / Migración (restricciones)',
            ' 9️⃣ Visas',
            ' 🔟 Contactar con un Agente',*/
            ' *A* *Iniciar mi Tramite*',
            ' *B* *Consultar estado de mi Tramite*',
        ],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            console.clear()
            console.log(ctx.body)
            VerificarCodigoRequest()
            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowStartRequests, flow_RIO_1_main]
    )

