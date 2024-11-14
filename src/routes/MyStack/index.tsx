import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Shop } from '../../screens/Shop';
import { Skills } from '../../screens/Skills';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Skills: undefined,
    Shop: undefined
}

export function MyStack() {
  return (
    <Stack.Navigator
        screenOptions={{ 
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Skills" 
            component={Skills} 
        />
        <Stack.Screen 
            name="Shop"
            component={Shop} 
        />
    </Stack.Navigator>
  );
}