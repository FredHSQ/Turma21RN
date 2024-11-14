import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { MagicItem } from "../../components/MagicItem";
import { MagicItemListProps, getMagicItemList } from "../../services/apiDnd";
import { styles } from "./styles";

export const Shop = () => {
    const [magicItemList, setMagicItemList] = useState<MagicItemListProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    async function callApi() {
        try {
            const result = await getMagicItemList();

            setMagicItemList(result.data.results);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        callApi();
    }, []);

    return <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
        {loading ?
            <ActivityIndicator
                size={"large"}
            />
            :
            <FlatList
                data={magicItemList}
                renderItem={({ item })=>{
                    return <MagicItem
                        item={item}
                    />
                }}
            />
        }
    </View>
}