
const BotWhatsaap = require('@bot-whatsapp/bot');
const flowReturn = require('./RIO8_returnBack');


module.exports = BotWhatsaap.addKeyword('81')
    .addAnswer(
        ['Ingreso de Vehículos a turismo PARA NO PROPIETARIOS DEL VEHICULO O SIVETUR (Sistema de Ingreso y Salida de Vehículos Turísticos)',
            '',
            ' ESTE TRÁMITE ES GRATUITO',
            '',
            ' Registrar datos solicitados (Propietario y Apoderado) en formulario 249 – link a seguir:',
            ' ',
            ' ●  Ingresa a portal web:   www.aduana.gob.bo ',
            ' ●  Entrar en: Servicios > para viajeros > VEHÍCULOS DE TURÍSMO> punto 1 (Registro formulario  Form. 249 - SIVETUR)',
            ' ●  Llenar el formulario, salvar e imprimir en 2 vías y firmar',
            ' ●  Para la validación el documento SIVETUR en el Consulado anexando los siguientes requisitos 👇 : ',
            ' ',
            ' Dos declaraciones con firma reconocida y APOSTILLADO ',
            ' (La declaración debe contener datos del propietario (CI, RNE y dirección) , el apoderado (CI, RNE y dirección) y el vehículo (motor, placa, chasis, modelo, etc.)  EL NÚMERO DEL MOTOR ES IMPORTANTE – El vehículo tiene que estar sin reserva de mercado (No debe de estar Alienado) , ',
            ' ',
            ' COMPLEMENTAR CON LOS SIGUIENTES DOCUMENTOS ORIGINAL Y FOTOCOPIA AUTENTICADA ',
            '       ',
            ' ●  Dos fotocopias autenticadas del RNE del propietario y del apoderado  ',
            ' ●  Dos fotocopias autenticadas del C.I. VIGENTE del propietario  y del apoderado  ',
            ' ●  Dos fotocopias autenticadas del documento del vehículo (el vehículo no puede estar alienado) ',
            ' ●  Dos copias autenticadas de la licencia brasilera vigente del apoderado  ',
            ' ●  Dos copias autenticadas de la licencia boliviana vigente del apoderado  es opcional',
            '●  Dos fotos 3x4 fondo blanco del propietario y del apoderado',
            ' ●  Comprobante de residencia del apoderado y del propietario',
            '  ',
            ' A  T  E  N  C  I  O  N !!',
            ' Una Vez Elaborado El Documento Tiene Valides Para El Ingreso Del Vehículo En Hasta 30 Días.',
            ' Presencia Imprescindible Del Apoderado y Propietario ',
            ' ',
            ' No es necesario realizar agendamiento para este trámite']
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

