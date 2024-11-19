import React, { useContext, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { MagicItem } from "../../components/MagicItem";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";
import { ItemDetailsModal } from "../../components/Modals/ItemDetailsModal";

export const Cart = () => {
    const { cartMagicItemList } = useContext(CartContext);

    const [modal, setModal] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<string>('');
    
    return <View style={styles.container}>
        <Text style={styles.title}> Carrinho </Text>
        <FlatList
            data={cartMagicItemList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data)=> data.index}
            renderItem={({item})=>(
                <MagicItem item={item} setModal={setModal} setSelectedIndex={setSelectedIndex}/>
            )}
        />
        {modal && <ItemDetailsModal 
            cart={true}
            modal={modal}
            setModal={setModal}
            selectedIndex={selectedIndex}
        />}
    </View>
}