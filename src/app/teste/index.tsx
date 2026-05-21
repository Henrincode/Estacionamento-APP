import Card from "@/components/card";
import ScrollArea from "@/components/ScrollArea";
import { styles } from "./styles";

export default function Teste() {
    return (
        <ScrollArea style={styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollArea>
    )
}