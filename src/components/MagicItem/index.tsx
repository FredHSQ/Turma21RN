import React from "react";
import { View, Text } from "react-native";
import { MagicItemListProps } from "../../services/apiDnd";
import { styles } from "./styles";

interface MagicItemProps {
    item: MagicItemListProps
}

export const MagicItem = ({ item }: MagicItemProps) => {
    return <View style={styles.buttonMagicItem}>
        <Text style={styles.textMagicItem}>
            { item.name }
        </Text>
    </View>
};