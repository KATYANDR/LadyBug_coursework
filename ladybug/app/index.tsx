import React from 'react';
import { View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FilterProvider } from './context/FilterContext';


const index = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'Nunito': require('../assets/fonts/Nunito-VariableFont_wght.ttf'),
  });

  return (
    <SafeAreaProvider>
      <FilterProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
          <StatusBar translucent backgroundColor='transparent' />
          <TabNavigator />
        </SafeAreaView>
      </FilterProvider>
    </SafeAreaProvider>
  );
};

export default index;
