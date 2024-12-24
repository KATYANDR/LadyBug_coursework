import { images, TabIcon } from '../../navigation/TabIcon'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

const Header = ({title}: {title: string}) => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Image style={styles.icon} source={images['backArrow']} />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            <View>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={images['link']} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 25,
        fontWeight: 400
    }
})

export default Header
