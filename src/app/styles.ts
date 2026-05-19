import { StyleSheet } from "react-native";

const background = "#222"
const textColorPrimary = "#f2f2f2"
const backbroundPrimary = "#333"
const backbroundSecundary = "#666"
const spacing = 8

export const styles = StyleSheet.create({
    container: {
        backgroundColor: background,
        gap: 10,
    },
    logoText: {
        color: textColorPrimary,
        fontSize: 36,
        textAlign: "center",
    },

    inputView: {
        backgroundColor: backbroundPrimary,
        flexDirection: "row",
        padding: 10,
        gap: 10,
        borderRadius: spacing,
    },
    inputText: {
        padding: 10,
        color: textColorPrimary,
        backgroundColor: backbroundSecundary,
        flex: 1,
        borderRadius: spacing,
        fontSize: 24,
    },
    inputButton: {
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: backbroundSecundary,
        padding: spacing,
        borderRadius: spacing
    },
    inputButtonText: {
        fontSize: 24,
        color: textColorPrimary,
    },
    listContainer: {
        backgroundColor: backbroundPrimary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderRadius: spacing
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