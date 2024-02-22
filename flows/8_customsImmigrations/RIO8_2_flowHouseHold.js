
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO8_returnBack');


module.exports = BotWhatsaap.addKeyword('82')
    .addAnswer(
        ['El trámite para  MENAJE DOMESTICO es personal y los requisitos son 👇:',
            '',
            'ESTE TRÁMITE ES GRATUITO',
            '',
            'Régimen de Menaje Doméstico, permite introducir a territorio aduanero boliviano mercancías sin el pago de tributos aduaneros de importación hasta un valor menor o a $us 50.000 para bolivianos o $US 35.000 para extranjeros, permitiendo a los no residentes en el país y los bolivianos que retornan al país después de dos (2) años mínimamente, ingresar sus efectos personales sin el pago de tributos aduaneros de importación de sus prendas y complementos de vestir, muebles, aparatos y demás accesorios de una unidad familiar. ',
            '',
            'FLUJO DEL TRÁMITE: DESTINO ESPECIAL DE MENAJE DOMÉSTICO',
            '',
            '●  Ingresa a portal web:   www.aduana.gob.bo ',
            '●  Entrar en: Servicios > para viajeros > menaje domestico > punto 1 (Registro formulario DDJJ…)',
            '●  Llenar la declaración jurada, salvar e imprimir en 4 vías y firmar.',
            '●  Presentar la declaración Jurada en el Consulado y solicitar su Validación. ',
            '●  Adjuntar 4 vías del Documento que acredite una permanencia mínima de dos (2) años en el extranjero puede ser pasaporte o RNE (CNM) además de Nombre, teléfono e CNPJ de la transportadora',
            '●  Adjuntar 4 vías del carnet de identidad boliviano ',
            'Observaciones:',
            'Leer con atención el instructivo de llenado de formulario de declaración jurada, que debe ser realizado por el ciudadano que se acoge al beneficio de retorno a Bolivia para fijar su residencia definitiva.',
            '',
            'No es necesario realizar agendamiento']
    )
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {

        try {
            const numero = ctx.from
            console.log('registramos en base de datos el numero...')
            return gotoFlow(flowReturn)
        } catch (error) {
            console.log(`[ERROR]`, error)
        }

    })

