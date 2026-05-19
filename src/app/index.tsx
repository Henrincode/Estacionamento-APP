import ScrollArea from "@/components/ScrollArea"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Index() {
    return (
        <ScrollArea style={styles.container}>
            <Text style={styles.logoText}>Vagas do BoxTo</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} />
                <TouchableOpacity style={styles.inputButton}>
                    <Text style={styles.inputButtonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

            {/* list */}
            <View style={styles.listContainer}>
                <Text style={styles.listPlaca}>ABC-1234</Text>
                <Text style={styles.listCheckIn}>11:30</Text>
                {/* <Text>12:30</Text> */}
                <TouchableOpacity style={styles.listButton}>
                    <Text style={styles.listButtonText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollArea >
    )
}