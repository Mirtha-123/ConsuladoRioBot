
const BotWhatsaap = require('@bot-whatsapp/bot');
const { LeerRequisitos, ConsultarCuentas } = require('../../services/cloudStorage');
const flowRequirements = require('./flowRequirements');


//const flowFinal = require('./flowEnd');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAnswer(
        ['Para este tramite debes enviar los siguientes documentos:'], null,
        async (ctx, { gotoFlow, state, provider }) => {
            try {


                const data = state.getMyState()

                const datos = await LeerRequisitos(data.selectTramite)

                const requisitos = datos.requisitos

                let cadena = ''
                console.log('CAPTURAMOS', requisitos)
                requisitos.forEach(element => {
                    cadena += `- *${element.documento}* \n`
                });


                await provider.sendText(`${ctx.from}@c.us`, cadena)

                await provider.sendText(`${ctx.from}@c.us`, 'Ya cuentas con todo lo necesario en este momento para iniciar con el tramite? \n1 - SI \n2 - NO')

                /*await state.update({ requisitos: requisitos, largeReq: requisitos.length, actual: 0, cantidadTiempo: datos.cantidadEstimada, tipoCantidad: datos.tipoCantidad })

                console.log('POR ENVIARLO')

                return gotoFlow(require('./flowSingleReq.js'))*/


            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }, []
    ).addAnswer(['🧐🧐🧐'
    ], { capture: true }, async (ctx, { gotoFlow, state, provider, endFlow }) => {
        try {

          
            const data = state.getMyState()

            if (ctx.body == 1) {
                return gotoFlow(require('./flowRequirements.js'))
            } else if (ctx.body == 2) {
                await provider.sendText(`${ctx.from}@c.us`, 'Gracias, vuelve cuando quieras y tengas la informacion necesaria')
                await provider.sendText(`${ctx.from}@c.us`, 'Ten un excelente dia.')
            } else {

            }

        } catch (error) {
            console.log(`[ERROR]`, error)
        }

        // el número de telefono se envía en este formato 12345678901@c.us
    }, [flowRequirements]
    )

