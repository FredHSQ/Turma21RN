import React, { createContext, useEffect, useState } from "react";
import { MagicItemListProps } from "../../services/apiDnd";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartProviderProps {
    children: React.ReactNode
}

export interface CartContextProvider {
    cartMagicItemList: MagicItemListProps[],
    addMagicItemToCart: (magicItem: MagicItemListProps) => void
    removeMagicItemFromCart: (index: string) => void
}

export const CartContext = createContext<CartContextProvider>({
    cartMagicItemList: [],
    addMagicItemToCart: () => {},
    removeMagicItemFromCart: () => {}
});

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartMagicItemList, setCartMagicItemList] = useState<MagicItemListProps[]>([]);

    useEffect(()=>{
        getData().then((data)=> {
            setCartMagicItemList(data);
        })
    }, [])

    function addMagicItemToCart (magicItem: MagicItemListProps) {
        setCartMagicItemList([...cartMagicItemList, magicItem])
        storeData([...cartMagicItemList, magicItem]);
    }

    function removeMagicItemFromCart (index: string) {
        const newMagicItemList = cartMagicItemList.filter(
            magicItem => magicItem.index !== index
        );

        setCartMagicItemList(newMagicItemList)
        storeData(newMagicItemList);
    }

    const storeData = async (value: MagicItemListProps[]) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('cart', jsonValue);
        } catch (e) {
          // saving error
        }
    };
    
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('cart');
          return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
          // error reading value
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartMagicItemList,
                addMagicItemToCart,
                removeMagicItemFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}