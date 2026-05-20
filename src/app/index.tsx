import List from "@/components/list"
import ScrollArea from "@/components/ScrollArea"
import placaService, { Placa, PlacaCreate } from "@/services/placas"
import { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Index() {

    const [placas, setPlacas] = useState<Placa[]>([])
    const [input, setInput] = useState('')

    async function load() {
        const response = await placaService.find()
        setPlacas(response)
    }

    async function create() {
        if (!input.trim()) return

        const newPlaca: PlacaCreate = {
            placa: input,
            checkIn: new Date(),
            checkOut: null,
            price: null
        }

        const response = await placaService.create(newPlaca)
        setPlacas(response)
        setInput('')
    }

    async function checkOut(placa: Placa) {



        const response = await placaService.checkOut(placa)
        setPlacas(response)
    }

    useEffect(() => { load() }, [])

    return (
        <ScrollArea style={styles.container}>
            <Text style={styles.logoText}>Vagas do BoxTo</Text>
            <View style={styles.inputView}>
                <TextInput onChangeText={text => setInput(text.toUpperCase())} value={input} style={styles.inputText} />
                <TouchableOpacity onPress={create} style={styles.inputButton}>
                    <Text style={styles.inputButtonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

            {/* list */}
            <List placas={placas} setPlacas={setPlacas} checkOut="false" />
            <View style={{ backgroundColor: '#444', height: 5, borderRadius: 10 }}></View>
            <List placas={placas} setPlacas={setPlacas} checkOut="true" />
        </ScrollArea >
    )
}