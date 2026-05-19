import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </KeyboardProvider>
        </SafeAreaProvider>
    )
}