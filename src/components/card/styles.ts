import { textColorPrimary } from "@/CONSTANTS/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
        borderWidth: 2,
        borderColor: "#666",
        padding: 10,
        borderRadius: 16,
        gap: 10,
        alignItems: "center"
    },
    vagaHora: {
        flexDirection: "row",
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 16

    },
    vaga: {
        width: '50%',
    },
    vagaNumero: {
        color: "#3a86ff",
        backgroundColor: "#3a86ff40",
        alignSelf: "flex-start",
        padding: 4,
        paddingHorizontal: 12,
        borderRadius: 666,
        fontWeight: "bold",
        fontSize: 16
    },
    vagaPlaca: {
        color: textColorPrimary,
        fontSize: 32,
        fontWeight: "bold"
    },
    vagaDesc: {
        color: textColorPrimary,
        fontSize: 24
    },

    hora: {
        width: '50%',
        alignItems: "flex-end"
    },
    entrada: {
        color: textColorPrimary,
        fontSize: 18
    },
    corrida: {
        color: textColorPrimary,
        fontSize: 18
    },

    btns: {
        flexDirection: "row",
        justifyContent: "center"
    },
    checkout: {
        backgroundColor: "#3a86ff",
        width: "80%",
        alignItems: "center",
        padding: 10,
        borderRadius: 20
    },
    checkoutText: {
        color: "#f2f2f2",
        fontSize: 20
    },
    editar: {},
    editarText: {}
})