import Reservation from '../../components/_HotTours/Reservation';
import TourInfo from '../../components/_HotTours/TourInfo';
import Tours from '../../components/_HotTours/Tours';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { TourStackParamList } from './TourStackParams';

const Stack = createStackNavigator<TourStackParamList>();

const TourStack = () => {

    return (
        <Stack.Navigator initialRouteName='Tours' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tours" component={Tours} />
            <Stack.Screen name="TourInfo" component={TourInfo} />
            <Stack.Screen name="Reservation" component={Reservation} />
        </Stack.Navigator>
    )
}

export default TourStack
