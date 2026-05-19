import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    children: ReactNode
    style?: ViewStyle
}

export default function ScrollArea({ children, style }: Props) {

    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />

            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
            >

                <ScrollView
                    contentContainerStyle={[{ paddingHorizontal: 10, paddingTop: insets.top + 20, paddingBottom: insets.bottom + 10 }, style, { flexGrow: 1 }]}
                    showsVerticalScrollIndicator={false}
                >
                    {children}

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}