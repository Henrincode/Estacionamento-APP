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
            checkOut: null
        }

        const response = await placaService.create(newPlaca)
        setPlacas(response)
        setInput('')
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
            {placas.map(p => {
                const dataCheckIn = new Date(p.checkIn)
                const dataCheckOut = p.checkOut ? new Date(p.checkOut) : ''
                const horas = String(dataCheckIn.getHours()).padStart(2, '0')
                const minutos = String(dataCheckIn.getMinutes()).padStart(2, '0')

                return (
                    <View key={p.id} style={styles.listContainer}>

                        <Text style={styles.listCheckIn}>
                            {`${horas}:${minutos}`}
                        </Text>
                        <Text style={styles.listCheckIn}>
                            {`${horas}:${minutos}`}
                        </Text>

                        <Text style={styles.listPlaca}>{p.placa}</Text>

                        <TouchableOpacity style={styles.listButton}>
                            <Text style={styles.listButtonText}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollArea >
    )
}