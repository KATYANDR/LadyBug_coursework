import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ShowFiltres = ({onPress} : {onPress?: () => void}) => {
    return (
        <View style={styles.container}>
                <LinearGradient
                    start={[0, 0]}
                    end={[1, 0]}
                    colors={['#2B4D66', '#D5EAFC', '#2B4D66']}
                    style={styles.gradient}
                >

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text style={styles.text}>Очистить фильтры</Text>
                        <Image style={styles.icon} source={require('../../../assets/images/filter.png')} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 30,
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        padding: 2,
    },
    gradient: {
        alignItems: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
        height: '100%',
        borderRadius: 25,
    },
    button: {
        width: 'auto',
        height: 40,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 4,
        borderRadius: 25
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 20,
    },
    icon: {
        width: 24,
        aspectRatio: 1,
        resizeMode: 'contain'
    }
});

export default ShowFiltres
