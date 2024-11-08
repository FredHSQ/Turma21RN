import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import CircleIcon from './../../../CircleIcon.png';
import { styles } from "./styles";

interface SkillCardProps {
    item: { 
        title: string, 
        id: string 
    }
}

export const SkillCard = (props:SkillCardProps) => {
    const { item } = props;

    return <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
    <Image source={CircleIcon} style={styles.image}/>
    <Text style={styles.textSkill}>
      { item.title }
    </Text>
  </TouchableOpacity>
}