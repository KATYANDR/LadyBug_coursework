import { getTours, TourType } from '../apiController/getTours';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Promo from '../components/articles/Promo';
import ShowFiltres from '../components/Buttons/ShowFiltres';
import Tour from '../components/_Directions/Tour';

const Tours = () => {
    const [tours, setTours] = useState<TourType[] | null>(null);

    useEffect(() => {
        const loadTours = async () => {
          try {
            const result = await getTours();
            setTours(result);
            console.log(result);
          } catch (error) {
            console.error("Ошибка при загрузке туров:", error);
          }
        };

      
        loadTours();
      }, []);
      

    return (
        <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='Направления' subtitle='Отслеживаем направления для вас' />
            <ShowFiltres />

            <FlatList
                data={tours}
                keyExtractor={(item, index) => index.toString()}
                style={{paddingVertical: 30}}
                renderItem={({ item }) => (
                    <Tour
                        {...item}
                    />
                )}
            />
            

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default Tours
