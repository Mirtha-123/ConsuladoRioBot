
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowWhileMake = require('./flowWhileMake.js');
const flowFinal = require('./flowFinal.js');



//const flowFinal = require('./flowEnd');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['👏🏽👏🏽👏🏽👏🏽'], null,
        async (ctx, { gotoFlow, state, provider }) => {
            try {
                const data = state.getMyState()

                if (data.actual < data.largeReq) {

                    await state.update({ tipoActual: data.requisitos[data.actual].tipo })
                    const txt = construirCadenaTramites(data.requisitos[data.actual])
                    await provider.sendText(`${ctx.from}@c.us`, txt)
                    return gotoFlow(require('./flowWhileMake.js'))
                } else {

                    return gotoFlow(require('./flowFinal.js'))

                }



                console.log('CAPTURAMOS', data)

            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowWhileMake, flowFinal]
    )


function construirCadenaTramites(req) {
    let cadena

    switch (req.tipo) {
        case 'image':
            cadena = 'Por favor saca una foto *nitida* de \n';
            break;
        case 'pdf':
            cadena = 'Por favor envia tu documento (pdf,word) \n';
            break;
        case 'txt':
            cadena = 'Por favor proporcioname tu \n';
            break;

        default:
            break;
    }
    const final = cadena += `*${req.documento}*`;

    return cadena;
}
