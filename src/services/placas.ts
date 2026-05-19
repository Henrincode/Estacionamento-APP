import AsyncStorage from "@react-native-async-storage/async-storage"

const PLACAS_STORAGE_KAY = "@estacionamento:placas"

export interface Placa {
    id: string
    placa: string
    checkIn: Date
    checkOut: Date | null
    price: number | null
}
export interface PlacaCreate {
    placa: string
    checkIn: Date
    checkOut: Date | null
    price: number | null
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
        console.log('create ', newStorage)
        return newStorage
    } catch (error) {
        return []
    }
}

// checkOut
async function checkOut(placa: Placa): Promise<Placa[]> {
    try {
        const placaCheckout: Placa = {
            ...placa,
            checkOut: new Date()
        }
        const storage = await find()
        const newStorage = storage.map(p => p.id === placaCheckout.id ? placaCheckout : p)
        await AsyncStorage.setItem(PLACAS_STORAGE_KAY, JSON.stringify(newStorage))
        console.log('checkout: ', newStorage)
        return newStorage
    } catch (error) {

    }
    return []
}

// checkPrice
async function checkPrice(placa: Placa) {
    // 1. O checkIn já vem como Date (ou string/ISO que precisamos garantir que vire Date)
    const dataIn = new Date(placa.checkIn);

    // 2. O checkOut está acontecendo AGORA
    const dataOut = new Date();

    // 3. Diferença em milissegundos
    const diferencaMs = dataOut.getTime() - dataIn.getTime();

    // 4. Conversão para horas e minutos totais
    const totalMinutos = Math.floor(diferencaMs / (1000 * 60));
    const horas = Math.floor(totalMinutos / 60);
    const minutosRestantes = totalMinutos % 60;

    

}
// update
// delete

const placaService = {
    find,
    create,
    checkOut,
    checkPrice
}

export default placaService