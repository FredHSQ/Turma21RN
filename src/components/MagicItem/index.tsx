import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MagicItemListProps } from "../../services/apiDnd";
import { styles } from "./styles";

interface MagicItemProps {
    item: MagicItemListProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedIndex: React.Dispatch<React.SetStateAction<string>>,
}

export const MagicItem = ({ item, setModal, setSelectedIndex }: MagicItemProps) => {

    function openModalWithIndex () {
        setModal(true);
        setSelectedIndex(item.index)
    }


    return <TouchableOpacity onPress={openModalWithIndex} style={styles.buttonMagicItem}>
        <Text style={styles.textMagicItem}>
            { item.name }
        </Text>
    </TouchableOpacity>
};