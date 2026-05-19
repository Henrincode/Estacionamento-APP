import { StyleSheet } from "react-native";

const background = "#222"
const textColorPrimary = "#f2f2f2"
const backbroundPrimary = "#333"
const backbroundSecundary = "#666"
const spacing = 8

export const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: backbroundPrimary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderRadius: spacing,
        borderWidth: 2,
        borderColor: "#ffffff10"
    },
    listPriceOurs: {
        justifyContent: "center",
        alignItems: "center",
    },
    listPrice: {
        color: textColorPrimary
    },
    listPlaca: {
        color: textColorPrimary,

    },
    listCheckIn: {
        color: textColorPrimary,

    },
    listButton: {
        backgroundColor: backbroundSecundary,
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: spacing

    },
    listButtonText: {
        color: textColorPrimary,
        fontWeight: "bold"

    },
})