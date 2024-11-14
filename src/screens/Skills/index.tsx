import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SkillCard } from '../../components/SkillCard';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MyStack';

type SkillType = {
  title: string,
  id: string
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const Skills = () => {
  const [newSkill, setNewSkill] = useState<string>(''); 
  const [skills, setSkills] = useState<SkillType[]>([]);
  const navigation = useNavigation<NavigationProps>();

  function addNewSkill () {
    const data: SkillType = {
      title: newSkill,
      id: String(new Date().getTime())
    }

    setSkills([...skills, data])
  }

  function navigateToShop() {
    navigation.navigate('Shop')
  }

  function removeSkill(id: string) {
    setSkills(oldState => {
      return oldState.filter(
        skill => skill.id !== id
      )
    })
  }

  return <View style={styles.container}>
    <TouchableOpacity onPress={navigateToShop}>
      <Text style={styles.title}>
        Skills
      </Text>
    </TouchableOpacity>

    <TextInput
      style={styles.input}
      onChangeText={setNewSkill}
      placeholderTextColor={'#555'}
      placeholder='New Skill'
    />
    <Button
      title='Add New Skill'
      activeOpacity={0.7}
      onPress={addNewSkill}
    />
    <FlatList
      data={skills}
      keyExtractor={skills => skills.id}
      renderItem={({ item }) => {
        return <SkillCard removeSkill={removeSkill} item={item}/>
      }}
    />
  </View>
}
