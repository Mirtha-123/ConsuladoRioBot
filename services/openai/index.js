const OpenAI = require("openai");
require('dotenv').config();
const openai = new OpenAI(
    {
        apiKey: process.env.OPENAI_API_KEY,
    }
);

async function chatFotoPDF(body) {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system", content: `[INSTRUCCIONES]:Eres un asistente que debe 
            identificar si el cliente desea enviarme una imagen o un pdf con su carnet o documento de identidad,
            solo debe responder con la palabra "PDF" o "IMAGE"`
        }, {
            role: "user", content: body
        }

        ],
        model: "gpt-3.5-turbo"
    });

    console.log(completion.choices[0]);
    return completion.choices[0];
}



module.exports = { chatFotoPDF };
