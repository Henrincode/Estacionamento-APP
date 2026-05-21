import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Nav() {
    return (
        <View style={styles.container}>
            <Link href={'./teste/'}>
                <Text style={styles.text}>
                    Textinhoooo
                </Text>
            </Link>
            <Link href={'./'}>
                <Text style={styles.text}>
                    Textinhoooo
                </Text>
            </Link>
        </View>
    )
}