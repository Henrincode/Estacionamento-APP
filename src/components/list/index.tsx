import placaService, { Placa } from "@/services/placas"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

interface Props {
    placas: Placa[]
    setPlacas: (placas: Placa[]) => void
    checkOut?: 'all' | 'true' | 'false'
}

export default function List({ placas, setPlacas, checkOut = 'all' }: Props) {

    async function fnCheckOut(placa: Placa) {
        const preco = await placaService.checkPrice(placa)
        Alert.alert(`Fechar placa: ${placa.placa}?`, `Valor a ser cobrado: R$${preco.toFixed(2)}`, [{
            text: 'Cancelar',
            style: "cancel"
        }, {
            text: 'ok',
            onPress: async () => {
                const newPlaca: Placa = {...placa, price: preco}
                const response = await placaService.checkOut(newPlaca)
                setPlacas(response)
            }
        }])
    }

    async function fnRestore(placa: Placa) {
        const response = await placaService.restore(placa)
        setPlacas(response)
    }

    return (
        placas
            .filter(p => checkOut === 'all' || (checkOut === 'true' && p.checkOut) || (checkOut === 'false' && !p.checkOut))
            .map(p => {
                const dataCheckIn = new Date(p.checkIn)
                const hIn = String(dataCheckIn.getHours()).padStart(2, '0')
                const mIn = String(dataCheckIn.getMinutes()).padStart(2, '0')

                const dataCheckOut = p.checkOut ? new Date(p.checkOut) : null
                const hOut = dataCheckOut ? String(dataCheckOut.getHours()).padStart(2, '0') : '--'
                const mOut = dataCheckOut ? String(dataCheckOut.getMinutes()).padStart(2, '0') : '--'

                return (
                    <View key={p.id} style={[styles.listContainer, p.checkOut && { backgroundColor: "#33333370" }]}>

                        {/* preço e horas */}
                        <View style={styles.listPriceOurs}>
                            {/* preço */}
                            {p.checkOut && <Text style={styles.listPrice}>R${p.price?.toFixed(2)}</Text>}
                            {/* horas */}
                            <View>
                                <Text style={styles.listCheckIn}>
                                    {`${hIn}:${mIn}${dataCheckOut ? `  |  ${hOut}:${mOut}` : ''}`}
                                </Text>
                            </View>
                        </View>

                        <Text onPress={() => placaService.checkPrice(p)} style={styles.listPlaca}>{p.placa}</Text>

                        <TouchableOpacity onPress={() => p.checkOut ? fnRestore(p) : fnCheckOut(p)} style={styles.listButton}>
                            <Text style={styles.listButtonText}>{p.checkOut ? 'Reabrir' : 'CheckOut'}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
    )
}