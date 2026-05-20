import Nav from "@/components/Nav";
import { Stack } from "expo-router";
import { Text } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <Stack screenOptions={{ headerShown: false }} />
                {/* <Nav /> */}
            </KeyboardProvider>
        </SafeAreaProvider>
    )
}