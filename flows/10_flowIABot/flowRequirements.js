
const BotWhatsaap = require('@bot-whatsapp/bot');
const { LeerRequisitos } = require('../../services/cloudStorage');
const flowSingleReq = require('./flowSingleReq.js');


//const flowFinal = require('./flowEnd');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['Genial vamos a comenzar, por favor enviame la siguiente información.'], null,
        async (ctx, { gotoFlow, state }) => {
            try {


                const data = state.getMyState()

                const datos = await LeerRequisitos(data.selectTramite)

                const requisitos = datos.requisitos
                await state.update({ requisitos: requisitos, largeReq: requisitos.length, actual: 0, cantidadTiempo: datos.cantidadEstimada, tipoCantidad: datos.tipoCantidad })

                console.log('POR ENVIARLO')

                return gotoFlow(require('./flowSingleReq.js'))
                console.log('CAPTURAMOS', requisitos)

            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowSingleReq]
    )

