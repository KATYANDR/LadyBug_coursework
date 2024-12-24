import { TourType } from '../../apiController/getTours';
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Rate from '../InfoBlocks/Rate';
import { useFilter } from '../../context/FilterContext';

const Tour: React.FC<TourType> = ({title, cost, rate, description, images, startDate, endDate}) => {
    const navigation = useNavigation<any>();
    const { filter } = useFilter();

    const handleNavigationToInfo = () => {
        navigation.navigate('TourInfo', {
            title,
            description,
            cost,
            rate,
            images
        });
    }

    if (filter.price != null) {
        if (cost > parseInt(filter.price, 10) + 1000 || cost < parseInt(filter.price, 10) - 1000) {
            return null;
        }
    }

    if (filter.startDate != null && filter.endDate != null && startDate != null) {
        const startDateParsed = new Date(startDate);
        if (startDateParsed < new Date(filter.startDate) || startDateParsed > new Date(filter.endDate)) {
            return null;
        }
    }

    return (
        <View style={styles.tourWrapper}>
            <View style={styles.tour}>
                <Image
                    source={{ uri: images?.[0]?.large || "https://via.placeholder.com/150" }}
                    style={styles.image}
                />

                <View style={styles.content}>
                    <Rate rate={rate} />

                    <Text style={styles.text}>{title}</Text>

                    <View style={styles.actionWrapper}>
                        <TouchableOpacity style={styles.button} onPress={handleNavigationToInfo}>
                            <Text style={styles.buttonText}>Забронировать</Text>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Nunito', fontSize: 15}}>От {cost} ₽</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tourWrapper: {
        marginVertical: 10
    },
    tour: {
        marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 150,
        padding: 10,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 15,
        fontWeight: 700,
        paddingVertical: 10
    },
    actionWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2B4D66',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 20
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: 15
    },

    content: {
        paddingHorizontal: 10
    }
})

export default Tour;
