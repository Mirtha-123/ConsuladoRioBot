const { getStorage, ref, uploadBytesResumable, uploadBytes, metadata, getDownloadURL } = require("firebase/storage");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("./index.js")

async function getImagesRepo(id, file) {

    try {

        const storageFB = getStorage()


        const user = await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

        const dataTime = Date.now()
        const fileName = `images/${id}/multimedia/${dataTime}.jpeg`
        const storageRef = ref(storageFB, fileName)
        const metadata = {
            contentType: 'image/jpeg'
        }

        const img = await uploadBytes(storageRef, file, metadata)
        const path = await getDownloadURL(storageRef)
        console.log('[PATH]', path)
        console.log(img);
        return path
        console.log(storageRef)

    } catch (error) {
        console.log('[ERROR GRAVE]', error)
    }

}


async function getDocRepo(id, file, ext) {

    try {

        const storageFB = getStorage()


        const user = await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

        const dataTime = Date.now()
        const fileName = `doc/${id}/multimedia/${dataTime}.${ext}`
        console.log(fileName)
        const storageRef = ref(storageFB, fileName)
        let metadata = {}
        if (ext == 'pdf') {
            metadata = {
                contentType: 'application/pdf'
            }
        } else {
            metadata = {
                contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            }

        }
        console.log(metadata)


        const doc = await uploadBytes(storageRef, file, metadata)
        const path = await getDownloadURL(storageRef)
        console.log('[PATH]', path)
      
        return path
        console.log(storageRef)

    } catch (error) {
        console.log('[ERROR GRAVE]', error)
    }

}

module.exports = { getImagesRepo,getDocRepo }