const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

//Version 1.0.1

const QRPortalWeb = require('@bot-whatsapp/portal')
const WebWhatsappProvider = require('@bot-whatsapp/provider/baileys')

const MockAdapter = require('@bot-whatsapp/database/mock')

const axios = require('axios');
const fs = require('fs');
const flowIndex = require('./flows/flowIndex');



const MONGO_DB_URI = 'mongodb://mongo:27017'
const MONGO_DB_NAME = 'db_bot'


const main = async () => {
    try {

        /// console.log(response)
        const adapterDB = new MockAdapter()
        const adapterFlow = flowIndex
        const adapterProvider = createProvider(WebWhatsappProvider)
        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        })
        QRPortalWeb()
    } catch (error) {
        console.log(error)
    }
    // const response = await chatModel.invoke("what is LangSmith?");

}

main()

