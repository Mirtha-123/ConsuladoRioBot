const Firestore = require('@google-cloud/firestore');
const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("./../firebase/index");
const { firestore } = require('googleapis/build/src/apis/firestore');


const db = new Firestore({
    projectId: 'consuladoriojanerio',
    keyFilename: './utils/consuladoriojanerio-firebase-adminsdk-flpga-d6a3b76cbf.json',

});

const docRef = db.collection('requests').doc();
const docRefReq = db.collection('requests');
const docTram = db.collection('tramites')
const docCuen = db.collection('cuentas')

async function CargarData(data) {
    try {
        //const user = await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

        const resp = await docRef.set({
            status: 'nuevo',
            mensajeFinal: null,
            observaciones: null,
            fecha: obtenerFecha(),
            hora: obtenerHora(),
            requisitos: data.requisitos,
            pushName: data.pushName,
            phone: data.phone,
            tramite: data.selectTramite,
            codigoTramite: data.codigoTramite
        });

        console.log('[NUEVO DATO]', resp)
    } catch (error) {
        console.log(error)
    }

}

async function LeerData() {
    try {
        const tramites = []
        const doc = await docTram.get();
        if (doc.empty) {
            console.log('No matching documents.');
            return;
        }

        doc.forEach((doc) => {

            tramites.push({
                nombre: doc.data().nombre,
                descripcion: doc.data().descripcion,
                codigo: doc.data().codigo,
                moneda: doc.data().moneda,
                costo: doc.data().costo,

                codigo_id: doc.id
            })

        });

        return tramites
    } catch (error) {
        console.log(error)
    }

}

async function LeerRequisitos(tramite) {
    try {

        const snapshot = await docTram.where('codigo', '==', tramite).get();
        const dato = snapshot.docs[0].data()




        return dato
    } catch (error) {
        console.log(error)
    }

}


async function VerificarCodigoRequest(codigo) {
    try {

        const snapshot = await docRefReq.where('codigoTramite', '==', codigo).get();
        const dato = snapshot.data().count
        console.log(dato)



        return dato
    } catch (error) {
        console.log(error)
    }

}
async function ConsultarStatusSolicitud(tramite) {
    try {
        let dato
        const snapshot = await docRefReq.where('codigoTramite', '==', tramite).get();

        if (snapshot.docs.length > 0) {
            dato = snapshot.docs[0].data()
        } else {
            dato = null
        }

        console.log()



        return dato
    } catch (error) {
        console.log(error)
    }

}


async function ConsultarCuentas() {
    try {
        const cuentas = []
        const doc = await docCuen.get();
        if (doc.empty) {
            console.log('No matching documents.');
            return;
        }

        doc.forEach((doc) => {

            cuentas.push({
                nombre: doc.data().nombre,
                numero: doc.data().numero,
                banco: doc.data().banco,
                agencia: doc.data().agencia ?? '',
                tipo: doc.data().tipo ?? '',
                cnpj: doc.data().cnpj ?? '',
                id: doc.id
            })

        });

        return cuentas
    } catch (error) {
        console.log(error)
    }

}

// Función para obtener la fecha en formato dd-mm-yyyy
function obtenerFecha() {
    const fecha = new Date();
    const dia = agregarCeroAlInicio(fecha.getDate());
    const mes = agregarCeroAlInicio(fecha.getMonth() + 1); // Los meses comienzan desde 0
    const anio = fecha.getFullYear();

    return `${dia}-${mes}-${anio}`;
}

// Función para obtener la hora en formato hh:mm:ss
function obtenerHora() {
    const fecha = new Date();
    const horas = agregarCeroAlInicio(fecha.getHours());
    const minutos = agregarCeroAlInicio(fecha.getMinutes());
    const segundos = agregarCeroAlInicio(fecha.getSeconds());

    return `${horas}:${minutos}:${segundos}`;
}

// Función para agregar un cero al inicio si el número es menor a 10
function agregarCeroAlInicio(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

// Ejemplos de uso
const fechaActual = obtenerFecha();
const horaActual = obtenerHora();
module.exports = { CargarData, LeerData, LeerRequisitos, ConsultarStatusSolicitud, ConsultarCuentas ,VerificarCodigoRequest} 