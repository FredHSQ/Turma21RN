import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Skills } from '../../screens/Skills';
import { Shop } from '../../screens/Shop';
import SkillsIcon from '../../assets/SkillIcon.png'
import ShopIcon from '../../assets/ShopIcon.png'
import CartIcon from '../../assets/CartIcon.png';
import { Cart } from '../../screens/Cart';

const Tab = createBottomTabNavigator<RootTabParamList>();

type RootTabParamList = {
    Skills: undefined,
    Shop: undefined,
    Cart: undefined
}

export function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{ 
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
            tabBarInactiveTintColor: '#aaa',
            tabBarActiveTintColor: '#fff'
        }}
    >
        <Tab.Screen 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        source={SkillsIcon}
                        style={{ tintColor: color, width: 30 }}
                    />)
            }}
            name="Skills" 
            component={Skills} 
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        source={ShopIcon}
                        style={{ tintColor: color, width: 30 }}
                    />)
            }}
            name="Shop"
            component={Shop} 
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        source={CartIcon}
                        style={{ tintColor: color, width: 30 }}
                    />)
            }}
            name="Cart" 
            component={Cart} 
        />
    </Tab.Navigator>
  );
}