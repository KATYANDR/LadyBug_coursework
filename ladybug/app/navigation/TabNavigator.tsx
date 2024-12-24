import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native';
import { TabIcon } from './TabIcon';
import Search from '../screens/Search';
import HotTours from '../screens/HotTours';
import Promotions from '../screens/Promotions';
import Directions from '../screens/Directions';
import Contacts from '../screens/Contacts';

export type RootStackParamList = {
    search: undefined;
    index: undefined;
    index2: undefined;
    index4: undefined;
    index5: undefined;
    // добавьте другие экраны, если нужно
  };
  
  export type TabParamList = {
    Home: undefined;
    Profile: undefined;
    // добавьте другие экраны в табах, если нужно
  };

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName='search'
            screenOptions={{
                tabBarStyle: { height: 60, paddingHorizontal: 20, paddingTop: 15, overflow: 'hidden' },
                tabBarIconStyle: { flex: 1 },
                headerShown: false,
                animation: 'shift'
            }}
        >
            <Tab.Screen
                name="index"
                component={Promotions}
                options={{
                    tabBarIcon: ({ focused }) => ( <TabIcon name='calendar' focused={focused} /> ),
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="index2"
                component={HotTours}
                options={{
                    tabBarIcon: ({ focused }) => ( <TabIcon name='fire' focused={focused} /> ),
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => ( <TabIcon name='search' focused={focused} /> ),
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="index4"
                component={Directions}
                options={{
                    tabBarIcon: ({ focused }) => ( <TabIcon name='mapMarker' focused={focused} /> ),
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="index5"
                component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => ( <TabIcon name='phone' focused={focused} /> ),
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
