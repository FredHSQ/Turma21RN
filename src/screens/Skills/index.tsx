import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { SkillCard } from '../../components/SkillCard';

export const Skills = () => {
  const [skills, setSkills] = useState([
    {
      id: '2',
      title: 'Habilidade 2'
    },
    {
      id: '1',
      title: 'Habilidade 1'
    },
    {
      id: '3',
      title: 'Habilidade 3'
    },
  ]);

  return <View style={styles.container}>
    <Text style={styles.title}>
      Skills
    </Text>
    <TextInput
      style={styles.input}
      placeholderTextColor={'#555'}
      placeholder='New Skill'
    />
    <FlatList
      data={skills}
      keyExtractor={skills => skills.id}
      renderItem={({ item }) => {
        return <SkillCard item={item}/>
      }}
    />
  </View>
}
