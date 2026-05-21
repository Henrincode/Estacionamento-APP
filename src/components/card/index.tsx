import { Placa } from "@/services/placas";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
    placa: Placa
    fnCheckOut: (placa: Placa) => void
    fnRestore: (placa: Placa) => void
}

export default function Card({ placa, fnCheckOut, fnRestore }: Props) {

    const [agora, setAgora] = useState(Date.now())

    const dataCheckIn = new Date(placa.checkIn)
    const horas = String(dataCheckIn.getHours()).padStart(2, '0')
    const minutos = String(dataCheckIn.getMinutes()).padStart(2, '0')
    const segundos = String(dataCheckIn.getSeconds()).padStart(2, '0')

    useEffect(() => {
        const intervalo = setInterval(() => {
            setAgora(Date.now())
        }, 1000)

        return () => clearInterval(intervalo)
    }, [])

    const horaCorrida = (dataCadastro: Date) => {
        const diferencaEmMilissegundos = agora - new Date(dataCadastro).getTime()

        // Evita valores negativos por pequenos atrasos de renderização
        const totalSegundos = Math.max(0, Math.floor(diferencaEmMilissegundos / 1000))

        const horas = Math.floor(totalSegundos / 3600)
        const minutos = Math.floor((totalSegundos % 3600) / 60)
        const segundos = totalSegundos % 60

        // Formata para garantir que sempre tenham 2 dígitos (ex: 02:05:09)
        const hDisplay = String(horas).padStart(2, '0')
        const mDisplay = String(minutos).padStart(2, '0')
        const sDisplay = String(segundos).padStart(2, '0')

        return `${hDisplay}:${mDisplay}:${sDisplay}`
    }

    return (
        <View style={styles.container}>
            {/* vaga e hora */}
            <View style={styles.vagaHora}>
                {/* vaga */}
                <View style={styles.vaga}>
                    <Text style={styles.vagaNumero}>VAGA 01</Text>
                    <Text style={styles.vagaPlaca}>{placa.placa}</Text>
                </View>
                {/* hora */}
                <View style={styles.hora}>
                    <Text style={styles.entrada}>🕐 Entrada: {horas}:{minutos}</Text>
                    <Text style={styles.corrida}>{horaCorrida(placa.checkIn)}</Text>
                </View>
            </View>
            {/* <Text style={styles.vagaDesc}>Descrição</Text> */}
            {/* btn checkout e editar */}
            <View style={styles.btns}>

                <TouchableOpacity onPress={() => placa.checkOut ? fnRestore(placa) : fnCheckOut(placa)} style={styles.checkout}>
                    <Text style={styles.checkoutText}>{placa.checkOut ? 'Reabrir' : 'CheckOut'}</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.editar}>
                    <Text style={styles.editarText}>Edit</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}