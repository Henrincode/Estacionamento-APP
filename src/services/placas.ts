import AsyncStorage from "@react-native-async-storage/async-storage"

const PLACAS_STORAGE_KAY = "@estacionamento:placas"

export interface Placa {
    id: string
    placa: string
    checkIn: Date
    checkOut: Date | null
}
export interface PlacaCreate {
    placa: string
    checkIn: Date
    checkOut: Date | null
}

// find
async function find(): Promise<Placa[]> {
    try {
        const storage = await AsyncStorage.getItem(PLACAS_STORAGE_KAY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error('ERRO FIND ' + error)
    }
}
// create
async function create(placa: PlacaCreate): Promise<Placa[]> {
    try {
        const id = Math.random().toString().replace('.', '')
        const novaPlaca = { id, ...placa }
        const storage = await find()
        const newStorage = [...storage, novaPlaca]
        await AsyncStorage.setItem(PLACAS_STORAGE_KAY, JSON.stringify(newStorage))
        return newStorage
    } catch (error) {

    }
    return []
}

// close
async function close(placa: Placa): Promise<Placa[]> {
    try {
        const novaPlaca: Placa = {
            ...placa,
            checkOut: new Date()
        }
        const storage = await find()
        const newStorage = [...storage, novaPlaca]
        await AsyncStorage.setItem(PLACAS_STORAGE_KAY, JSON.stringify(newStorage))
        return newStorage
    } catch (error) {

    }
    return []
}
// update
// delete

const placaService = {
    find,
    create,
    close

}

export default placaService