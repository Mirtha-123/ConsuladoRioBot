
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./../flowReturn');



module.exports = BotWhatsaap.addKeyword('11')
    .addAnswer(
        ['  Para la solicitud del duplicado de certificado de nacimiento, matrimonio y defuncion el interesado deberá presentar:',
            '●   Cualquier documento de identidad vigente o caducado(ORIGINAL o COPIA).',
            '●   Antes de realizar el depósito bancario, es necesario realizar la verificación de datos en sistema.',
            '●   Depósito bancario correspondiente a la tasa arancelaria en Reales',
            'NO ES NECESARIO REALIZAR AGENDAMIENTO']
    ).addAnswer(
        ['Datos de la cuenta bancaria para realizar el deposito',
            ' ============================= ',
            'BANCO SANTANDER',
            ' ============================= ',
            'AGENCIA: N°  4793',
            'C.C. 13-002506 - 0',
            ' ============================= ',
            'NOME: CONSULADO GERAL DA BOLIVIA',
            'Depósitos para costo, NACIMIENTO',
            'Valor a ser depositado',
            '28,00 Reales       fecha  13 /03 / 2023',
            ' ============================= ',
            'Depósitos para costo, MATRIMONIO y DEFUNCIÓN',
            'Valor a ser depositado',
            '60,00 Reales       fecha  13 /03 / 2023',
            '============================= '

        ]
    ).addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })