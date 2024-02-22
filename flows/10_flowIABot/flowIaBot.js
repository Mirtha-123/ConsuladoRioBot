const { Pinecone } = require('@pinecone-database/pinecone');
const BotWhatsaap = require('@bot-whatsapp/bot');
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const { writeFile } = require("node:fs/promises");

const { chatFotoPDF } = require('./../../services/openai/index.js')
const fs = require('fs');

const pc = new Pinecone({
    apiKey: 'd4e80e91-cfd5-4542-97b5-8c30d709bca4',
});

const { getImagesRepo } = require('./../../services/firebase/images.js');
const { CargarData, LeerData } = require('../../services/cloudStorage/index.js');
const { generarValorAleatorio } = require('../../utils/random.js');
//ENVIAR IMAGENES

//await provider.sendImage(`${ctx.from}@c.us`, 'bot.qr.png', 'mensaje de texto')


/* IMPORTANTE ESTO ES PARA IMAGENS*/
/*
module.exports = BotWhatsaap.addKeyword(BotWhatsaap.EVENTS.MEDIA).addAction(async (ctx) => {
    try {
        const buffer = await downloadMediaMessage(ctx, "buffer");
        await fs.writeFileSync("./image.jpeg", buffer);
    } catch (err) {
        console.log(err);
    }
});
*/
module.exports = BotWhatsaap.addKeyword('10')
    .addAnswer(['Genial vamos a empezar tu tramite, dime que tramite necesitas realizar?'],
        { capture: true }, async (ctx, { gotoFlow, state }) => {
            console.log(ctx.body)
            const tramites = await LeerData()
            console.log(tramites)
            await state.update({ tramite: ctx.body })
            // el número de telefono se envía en este formato 12345678901@c.us
        })
    .addAnswer(['Super gracias por eso, ahora porfavor dame tu nombre completo'], { capture: true }, async (ctx, { gotoFlow, state }) => {
        console.log(ctx.body)
        await state.update({ nombre: ctx.body })
        // el número de telefono se envía en este formato 12345678901@c.us
    })
    .addAnswer(['Gracias, ya casi tenemos lo necesario,',
        'porfavor enviame tu carnet Anverso y Reverso, por favor saca una foto de tu carnet'])
    /*
    PARA LLAMAR A CHATGPT

    , { capture: true },
        async (ctx, { gotoFlow, provider, state, flowDynamic, endFlow }) => {

            try {
                console.log(ctx.body)
                const txt = ctx.body;

                const resp = await chatFotoPDF(txt)

                console.log(resp.message)

                if (resp.message.content == 'IMAGE') {

                    await state.update({ carnet: 'IMG' })
                    //  await flowDynamic(["Genial porfavor empezemos con la parte frontal de tu documento, mandame una foto de tu CI!"]);


                    await provider.sendText(`${ctx.from}@c.us`, 'Genial porfavor empezemos con la parte frontal de tu documento, mandame una foto de tu CI!')
                } else if (resp.message.content == 'PDF') {

                    await state.update({ carnet: 'PDF' })
                    //   await flowDynamic(["Super porfavor sube el pdf con tu carnet anverso y reverso!"]);

                }

                // await flowDynamic(["😉👍🏽😉👍🏽😉👍🏽😉👍🏽😉👍🏽"]);
            } catch (error) {
                console.log(error)
            }

            // el número de telefono se envía en este formato 12345678901@c.us
        }
    */
    .addAnswer(['Empezemos con la parte frontal del carnet, porfavor enviame una foto de tu CI😉👍🏽'], { capture: true }, async (ctx, { gotoFlow, state }) => {

        const buffer = await downloadMediaMessage(ctx, "buffer");
        //await fs.writeFileSync(`./multimedia/${ctx.from}image.jpeg`, buffer);
        //const fileBuffer = fs.readFileSync(`./multimedia/${ctx.from}image.jpeg`);
        const resp = await getImagesRepo(ctx.from, buffer)


        await state.update({ frontCI: resp })

        await state.update({ pushName: ctx.pushName })



        //
        console.log('AQUI DEBE LLEGAR LA IMAGEN', resp)
        console.log(state.getMyState())

    }).addAnswer(['Muchas Gracias', 'Ahora porfavor enviame el reverso de tu CI'], { capture: true }, async (ctx, { gotoFlow, state }) => {

        const buffer = await downloadMediaMessage(ctx, "buffer");
        //await fs.writeFileSync(`./multimedia/${ctx.from}image.jpeg`, buffer);
        //const fileBuffer = fs.readFileSync(`./multimedia/${ctx.from}image.jpeg`);
        const resp = await getImagesRepo(ctx.from, buffer)


        await state.update({ reverseCI: resp })
        console.log(ctx)
        //
        console.log('AQUI DEBE LLEGAR LA IMAGEN', resp)
        console.log(state.getMyState())
        const num = await generarValorAleatorio()

        const nombre = num + '-' + ctx.from
        await state.update({ codigo: num })

        const data = state.getMyState()
        await CargarData(data)

    }).addAnswer(['Gracias con eso tenemos lo necesario tu numero de tramite'], null, async (ctx, { gotoFlow, state, provider }) => {


        const data = state.getMyState()
        await provider.sendText(`${ctx.from}@c.us`, 'Tu codigo de solicitud es ' + data.codigo)

    })




//const { ChatOpenAI } = require("@langchain/openai");

/*const chatModel = new ChatOpenAI({
    openAIApiKey: "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",
});
*/
/*
module.exports = BotWhatsaap.addKeyword('10')
    .addAnswer(['Por favor sube una copia de documento de identidad(Anverso y Reverso en formato PDF)'
    ]).addAnswer(BotWhatsaap.EVENTS.MEDIA).addAction(async (ctx, { provider }) => {
        try {
            console.clear()
            const buffer = await downloadMediaMessage(ctx, "stream");
            await fs.writeFileSync("./image.jpeg", buffer);

            /*  const m = await provider.vendor._events.message
              console.log(m)
              console.log(ctx.from)
              await provider.sendImage(`${ctx.from}@c.us`, 'bot.qr.png', 'mensaje de texto')


            /*const eventos = await provider.busEvents()

            console.log(eventos)
            const resultados = await Promise.all(
                eventos.map(async (evento) => {
                    try {
                        return await evento.func();
                    } catch (error) {
                        // Manejar el error para cada función
                        console.error(`Error en evento ${evento.event}:`, error);
                        throw error; // Lanzar el error para que Promise.all lo capture
                    }
                })
            );

            console.log('Resultados:', resultados);
            console.log('Recorrido completado.');


            /*  const response = await chatModel.invoke("what is LangSmith?");

              console.log(response)*/

//PINECONE
/*
               const ind = await pc.listIndexes();*/

// console.log(`[INDICES]`, ind)


/* console.log(ctx._data.deprecatedMms3Url)
 const pdfUrl = ctx._data.deprecatedMms3Url;
 const pdfFileName = './archivo.pdf';
 // Descargar el archivo PDF

 const response = await axios({
     method: 'get',
     url: pdfUrl,
     responseType: 'arraybuffer',
 });
 console.log(response)
 const buffer = Buffer.from(response.data, 'binary');
 fs.writeFileSync('downloaded_image.jpg', buffer);
 console.log('Image downloaded successfully.');

} catch (error) {
console.error('Error general:', error);
}


})

*/
