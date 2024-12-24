import { TourType } from '../../apiController/getTours'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from './Header';
import { StyleSheet } from 'react-native';
import Rate from '../InfoBlocks/Rate';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TourInfoRouteProp, TourStackParamList } from '../../navigation/_Tours/TourStackParams';

type NavigationProp = StackNavigationProp<TourStackParamList, 'Reservation'>;

const TourInfo: React.FC<{ route: TourInfoRouteProp }> = ({route}) => {
    const params = route.params as TourType;
    const navigation = useNavigation<NavigationProp>();
    
    // Состояние для главной картинки
    const [mainImage, setMainImage] = useState<string>(params.images?.[3]?.large || "https://via.placeholder.com/150");

    useEffect(() => {
        setMainImage(params.images?.[0]?.large || "https://via.placeholder.com/150");
    }, [])

    // Обработчик клика на миниатюру
    const handleImagePress = (imageUri: string) => {
        setMainImage(imageUri);
    };

    const handleReservation = () => {
        navigation.navigate('Reservation', {
            title: params.title,
            description: params.description,
            cost: params.cost,
            rate: params.rate,
            images: params.images
        });
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Header title={'информация'} />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.titleText}>{params.title}</Text>
                    <View style={{paddingVertical: 15}}>
                        <Rate rate={params.rate} />
                    </View>

                    <Image
                        source={{ uri: mainImage }}
                        style={styles.image}
                    />

                    <View style={{ marginTop: 15, justifyContent: 'center' }}>
                    <ScrollView
                        horizontal={true}  // Включаем горизонтальную прокрутку
                        showsHorizontalScrollIndicator={false}  // Отключаем индикатор прокрутки
                        contentContainerStyle={{ flexDirection: 'row', gap: 10 }}
                    >
                        {params.images.map((image, index) => (
                        <TouchableOpacity onPress={() => handleImagePress(image.large)} key={index}>
                            <Image
                            source={{ uri: image.large }}
                            style={styles.miniImage}
                            />
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                    </View>


                    <Text style={[styles.titleText, {paddingVertical: 10}]}>
                        Об отеле
                    </Text>

                    <Text style={{fontFamily: 'Nunito', fontSize: 12}}>
                        {params.description}
                    </Text>
                </View>

                
                <Text style={{fontFamily: 'Nunito', fontSize: 15, textAlign: 'right', padding: 20}}>От {params.cost} ₽</Text>
                <TouchableOpacity style={styles.button} onPress={handleReservation}>
                    <Text style={styles.buttonText}>Забронировать</Text>
                </TouchableOpacity>
                            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    content: {
        padding: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Nunito',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    miniImage: {
        width: 62.5,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    button: {
        margin: 20,
        backgroundColor: '#2B4D66',
        borderRadius: 30,
        padding: 10,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: 15,
        textAlign: 'center'
    },
});

export default TourInfo;
