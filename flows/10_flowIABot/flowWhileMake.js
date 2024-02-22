
const BotWhatsaap = require('@bot-whatsapp/bot');
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const { getImagesRepo,getDocRepo } = require('./../../services/firebase/images.js');
const flowSingleReq = require('./flowSingleReq');
const { obtenerExtension } = require('../../utils/extension.js');
//const flowFinal = require('./flowEnd');

module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.ACTION)
    .addAction(
        { capture: true },
        async (ctx, { gotoFlow, state, provider, fallBack }) => {
            try {
                const data = state.getMyState()
                let requisitos
                let num
                switch (data.tipoActual) {
                    case 'image':
                        cadena = 'Por favor saca una foto de \n';
                        const buffer = await downloadMediaMessage(ctx, "buffer");
                        const resp = await getImagesRepo(ctx.from, buffer)
                        requisitos = data.requisitos
                        requisitos[data.actual].valor = resp
                        num = data.actual + 1
                        await state.update({ requisitos: requisitos, actual: num })

                        return gotoFlow(require('./flowSingleReq.js'))
                        break;
                    case 'pdf':

                        if (!ctx.message.documentMessage) {
                            await provider.sendText(`${ctx.from}@c.us`, 'Debes enviar un archivo en el formato correcto PDF o Word.')
                            return fallBack()
                        } else {
                            console.log(ctx)
                            const ext = obtenerExtension(ctx.message.documentMessage.title)
                            console.log(ext)
                            if (ext == 'pdf' || ext == 'docx') {

                                const buffer = await downloadMediaMessage(ctx, "buffer");
                                const resp = await getDocRepo(ctx.from, buffer,ext)
                                requisitos = data.requisitos
                                requisitos[data.actual].valor = resp
                                requisitos[data.actual].nombreArchivo = ctx.message.documentMessage.fileName
                                num = data.actual + 1
                                await state.update({ requisitos: requisitos, actual: num })
                                return gotoFlow(require('./flowSingleReq.js'))
                            } else {
                                await provider.sendText(`${ctx.from}@c.us`, 'Debes enviar un archivo en el formato correcto PDF o Word.')
                                return fallBack()
                            }

                        }

                        cadena = 'Por favor envia un documento PDF con \n';
                        break;
                    case 'txt':
                        cadena = 'Por favor dime tu \n';
                        requisitos = data.requisitos
                        requisitos[data.actual].valor = ctx.body
                        num = data.actual + 1
                        await state.update({ requisitos: requisitos, actual: num })

                        return gotoFlow(require('./flowSingleReq.js'))

                        break;

                    default:
                        break;
                }

                console.log('CAPTURAMOS', data)

            } catch (error) {
                console.log(`[ERROR]`, error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }, [flowSingleReq]
    )
