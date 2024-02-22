
const BotWhatsaap = require('@bot-whatsapp/bot');


//const flowApprovalOfDeath = require('./civilRegister/flowApprovalOfDeath');

module.exports = BotWhatsaap.addKeyword('3')
    .addAnswer(['Comunicamos que tanto la solicitud como el retiro de los Antecedentes son realizados de manera personal  y los requisitos son👇:',
        '',
        '●  Fotocopia y Original de la Cédula de Identidad boliviana VIGENTE DEL SOLICITANTE ',
        '●   Este trámite puede ser solicitado solo por personas MAYORES DE 18 AÑOS ',
        '●   Presentados los documentos el Antecedente se entregara el mismo día',
        '●   Depósito bancario de acuerdo a tasa arancelaria',
        '●   Será requerida la presencia del solicitante para la colecta de las huellas y la firma',
        '',
        'PARA ESTE TRAMITE NO ES NECESARIO REALIZAR AGENDAMIENTO'
    ]).addAnswer([
        'Datos de la cuenta bancaria para realizar el deposito ',
        '',
        '=============================',
        'BANCO SANTANDER',
        '=============================',
        'AGENCIA: N°  4793    ',
        'C.C. 13-002506 - 0',
        '=============================',
        'NOME: CONSULADO GERAL DA BOLIVIA',
        'Depósitos para costo, ANTECEDENTES Penales',
        'Valor a ser depositado ',
        '210,00 Reales       fecha 13 /03 / 2023',
        '============================= ',


    ]).addAnswer('Si desea regresar al menú principal digite #0.',
        { capture: true }, async (ctx, { gotoFlow }) => {
            console.log(ctx.body)
            if (ctx.body == 0) {
                return gotoFlow(require('./../flowPrincipal'))
            }
            // el número de telefono se envía en este formato 12345678901@c.us
        })
