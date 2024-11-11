import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import CircleIcon from './../../../CircleIcon.png';
import { styles } from "./styles";

interface SkillCardProps {
  item: { 
    title: string, 
    id: string 
  },
  removeSkill: (id:string) => void
}

export const SkillCard = (props:SkillCardProps) => {
    const { item, removeSkill } = props;

    return <TouchableOpacity onPress={() => removeSkill(item.id)} activeOpacity={0.7} style={styles.buttonSkill}>
    <Image source={CircleIcon} style={styles.image}/>
    <Text style={styles.textSkill}>
      { item.title }
    </Text>
  </TouchableOpacity>
}