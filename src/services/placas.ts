import AsyncStorage from "@react-native-async-storage/async-storage"

const PLACAS_STORAGE_KAY = "@estacionamento:placas"

// find
async function find() {
    try {
        const storage = await AsyncStorage.getItem(PLACAS_STORAGE_KAY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error('ERRO FIND ' + error)
    }
}
// create
// update
// delete