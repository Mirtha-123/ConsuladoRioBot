
const { GoogleSpreadsheet } = require('google-spreadsheet')
const { JWT } = require('google-auth-library');
const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
];

module.exports = class GoogleSheetService {
    constructor(id = undefined) {
        if (!id) {
            throw new Error("ID_UNDEFINED");
        }

        this.jwtFromEnv = new JWT({
            email: 'consuladorio@consuladoriojanerio.iam.gserviceaccount.com',
            key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBEQ+LrabD/Snw\nZuMGCFmGDJ2CCjBx9M3H8rhdbpfyCCtAsORFD0m8l9is/Z3z/MLiZAsOIB8pD+hE\nHjjgYwnnB7Fnwv8K/2yAMJOtip6BuohIzMZGLSExX1a3uAR8v98YvBt/n7E4pwkw\nQZ0O7B/SkkNpsP5HQ0NoYrqhVwvV7zXVIwvj6lzAkSZgAdjOafc4QGatGOTeiCA/\nOXQpf8qUiVZeGwX2wOOaWtc28RI5PJirimIYU/hzuOd8QHyWIekMBF+roZy+Ihna\nbfxHxrXGzuw6ic0u3Ir2bzadN5l0SK324aGTMZAIj2D0J7Sl9rn3lo2u5lC4Y7+/\nLAxWO547AgMBAAECggEATvU9wNevfLcEWGOTlCuFBVwSbJTjNC+0mwHqoZdxv9PU\ncJwHdzDl7KHDRRhh6V9linX0yX2ckMwHJxifFTGb4qbUSIXIjYRhqNl1BAPNiGuz\ngeZxblDVot4FVpSFDUnhIToJGvxB29QAX4JuC6TI7PLRbB+tFpLtNfsurX4ugnqg\naWdkd9y4YgnX4zhHrXnTNnbhvnlASXe2MJErVO8TkehsrNU80cLRTI8+2xNqjTxb\nxSFfWztKT0Qwkt7TL/79fY84kCkcbSyVQ0Aj4KGZf5Ru3LY66TPJ16WvmFFqm/pP\nVvj+n5A869He8FHNXOfC2Elff0T9pNCZTMG6PSN2PQKBgQDuGZU/+PQY7eZ8pQnO\n1eSEjfpOEXL2bF/qACU4mxLAwiERKFxByArf83+uLdq6wYPMDTYiVCOcfU8JpGre\nYx18OLU5TGgvrCSMKGGESBfVVCHy3FDU64Y9FZHXU88s6R+KFrrxihBwENRn9FXo\nopusvKGa5CLBfBWgu5uYoSZ1FQKBgQDPlMb8iVmk9SjARVtV8wZCpwtn55iDmjrS\nOg+nW02fuv87vzMP5WEUDXh3jw+55JHkTlDrqm6qw/G4wTBtRjMQgGpxEv5ML+Gc\nk/3VuTpSBq3jBXOQ7XpoatuJOge2Z7nZfeSpvGoPIgVcYRaQnH3CRpB9SQS9Hgjc\n/KE1uaQ6DwKBgQCRJPlNwSaUV9oMm9MJymv+vkoa8xogzFn/3MzT3/yjkvPzcKYk\n15yBfv+Tn5JaDIOajWc1sBLxX5Yh65/WJ5ee1TbsUf6lKQwygJ9Js2UL/7ieQt3n\nnhf7/r0kBYwi9Y3rcQXPHnn8xtWk9Va1dQLvXyIouO/TASByFku41GwMLQKBgChO\nFfjw3lQWOgxjKyHcJyoH70IEiOt8pdEt7t4q7z6Fe4tpS4vZmOjg2LQ2NfJ9PAqd\nXj7z/7rugt/Buxpsl/urQ3+jFXdLkL3rSk0WQwmsPFUpONA6HBtsLCZP+zFioIZn\nWF/QsrMvguT2AQChMhXnx6Rb6iyiSUxHTTH2UrnnAoGBAMxlo0H83wXI/Pr5ymEp\nvNXMCZkYDdPCd/LxyiB921QOtbexmoZuSCLb00/Ty/hlckU4vTPgFq2tpmryqPN+\nmViNdUAxgzn5yBzJrLiLSqWYd0uusQ+h7WwQM1MzYzLiBR9d4aexZ3GPkAzlzX+Y\n5972HfTpVqUYXKbTtD/D+2lQ\n-----END PRIVATE KEY-----\n',
            scopes: SCOPES,
        });
        this.doc = new GoogleSpreadsheet(id, this.jwtFromEnv);
    }

    recuperarInfo = async () => {
        try {
            console.log('Vamos a intentar recuperar Info')

            const list = [];
            await this.doc.loadInfo();
            const sheet = this.doc.sheetsByIndex[1]; // the first sheet


            await sheet.loadCells("A1:H10");
            const rows = await sheet.getRows();
            console.log(`[LAS FILAS]`, rows)
            console.log(`[LARGO]`,rows.length); 
            console.log(rows[0].get('Personas')); 

            return list;
        } catch (err) {
            console.log(err);
            return undefined;
        }
    };

    /**
     * Guardar pedido
     * @param {*} data
     */
    saveOrder = async (data = {}) => {
        await this.doc.loadInfo();
        const sheet = this.doc.sheetsByIndex[1]; // the first sheet

        const order = await sheet.addRow({
            fecha: data.fecha,
            telefono: data.telefono,
            nombre: data.nombre,
            pedido: data.pedido,
            observaciones: data.observaciones,
        });

        return order
    };
}
