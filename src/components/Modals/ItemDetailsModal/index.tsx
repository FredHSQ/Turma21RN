import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CloseIcon from '../../../assets/CloseIcon.png';
import { getMagicItemDetails, getMagicItemDetailsResponse } from "../../../services/apiDnd";

export interface ItemDetailsModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    modal: boolean,
    selectedIndex: string
}

export const ItemDetailsModal = ({modal, setModal, selectedIndex}: ItemDetailsModalProps) => {
    const [loading, setLoading] =useState<boolean>(true);
    const precoModal = Math.floor(Math.random() * 10000);
    const [magicItem, setMagicItem] = useState<getMagicItemDetailsResponse>();

    useEffect(()=>{
        getMagicItemDetails(selectedIndex).then(({data}) => {
            setMagicItem(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false);
        })
    }, []);

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(false);
        }}
    >
        <View style={styles.modal}>
            <View style={styles.modalContainer}>
            {
                loading ?
                    <ActivityIndicator
                        size={"large"}
                    />
                    : (
                        magicItem ?
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{magicItem.name}</Text>
                                        <TouchableOpacity onPress={() => setModal(false)}>
                                            <Image source={CloseIcon} style={styles.closeIcon} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.firstStatsContainer}>
                                        <View style={styles.firstStats}>
                                            <Text style={styles.textTitle}>Rarity: </Text>
                                            <Text style={styles.textTitle}>{magicItem.rarity.name}</Text>
                                        </View>
                                        <View style={styles.firstStats}>
                                            <Text style={styles.textTitle}>Type: </Text>
                                            <Text style={styles.textTitle}>{magicItem.equipment_category.name}</Text>
                                        </View>
                                        <View style={styles.firstStats}>
                                            <Text style={styles.textTitle}>Price: </Text>
                                            <Text style={styles.textTitle}>R${precoModal},00</Text>
                                        </View>
                                    </View>
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.textTitle}>
                                            Descrição:
                                        </Text>
                                        <Text style={styles.text}>
                                            {magicItem.desc[1]}
                                        </Text>
                                        {magicItem.desc.length > 2 && magicItem.desc.map((description,index) => {
                                            if (index > 1)
                                                return <Text style={styles.text}>
                                                    {description}
                                                </Text>
                                        })
                                        }
                                    </View>
                                </ScrollView>
                                {/* <Button title={cart ? "Remover do carrinho" : "Adicionar ao Carrinho"} onPress={handleButton}/> */}
                            </>
                            :
                            <Text style={styles.title}>Erro</Text>
                    )
				}
            </View>
        </View>
    </Modal>
}