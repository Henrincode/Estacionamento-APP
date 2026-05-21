import placaService, { Placa } from "@/services/placas"
import { useEffect, useState } from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Card from "../card"

interface Props {
    placas: Placa[]
    setPlacas: (placas: Placa[]) => void
    checkOut?: 'all' | 'true' | 'false'
}

export default function List({ placas, setPlacas, checkOut = 'all' }: Props) {

    const [agora, setAgora] = useState(Date.now());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setAgora(Date.now()); // Atualiza o timestamp atual a cada segundo
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    async function fnCheckOut(placa: Placa) {
        const preco = await placaService.checkPrice(placa)
        Alert.alert(`Fechar placa: ${placa.placa}?`, `Valor a ser cobrado: R$${preco.toFixed(2)}`, [{
            text: 'Cancelar',
            style: "cancel"
        }, {
            text: 'ok',
            onPress: async () => {
                const newPlaca: Placa = { ...placa, price: preco }
                const response = await placaService.checkOut(newPlaca)
                setPlacas(response)
            }
        }])
    }

    async function fnRestore(placa: Placa) {
        const response = await placaService.restore(placa)
        setPlacas(response)
    }

    const tpc = (dataCadastro: Date) => {
        const diferencaEmMilissegundos = agora - new Date(dataCadastro).getTime();

        // Evita valores negativos por pequenos atrasos de renderização
        const totalSegundos = Math.max(0, Math.floor(diferencaEmMilissegundos / 1000));

        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        // Formata para garantir que sempre tenham 2 dígitos (ex: 02:05:09)
        const hDisplay = String(horas).padStart(2, '0');
        const mDisplay = String(minutos).padStart(2, '0');
        const sDisplay = String(segundos).padStart(2, '0');

        return `${hDisplay}:${mDisplay}:${sDisplay}`;
    };

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
                    <Card key={p.id} placa={p} fnCheckOut={fnCheckOut} fnRestore={fnRestore} />
                )
            })
    )
}