
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO8_returnBack');


module.exports = BotWhatsaap.addKeyword('83')
    .addAnswer(
        ['Ingresa al link abajo para saber las nuevas restricciones de ingreso a Bolivia ',
            '👇',
            '',
            'https://www.facebook.com/1102887103104060/posts/5114123991980331/?sfnsn=wiwspmo']
    ).addAnswer([
        'puedes entrar en contacto con la aerolínea BOA',
        'Whatssap',
        '+ 55 11 945077541'
    ])
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })

