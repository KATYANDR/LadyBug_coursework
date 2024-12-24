import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface PromoProps {
    title: string;
    subtitle: string;
    isLogo?: boolean
}

const Promo: React.FC<PromoProps> = ({ title, subtitle, isLogo }) => {
    return (
        <View style={styles.promo}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {isLogo && <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />}
        </View>
    )
}

const styles = StyleSheet.create({
    promo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        gap: 5
    },
    title: {
        width: '100%',
        textAlign: 'center',
        lineHeight: 48.76,
        fontSize: 40,
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: '#3D3D3D',
        fontWeight: '400',
        textShadowColor: '#0004',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 5
    },
    subtitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 12.19,
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: '#3D3D3D',
        fontWeight: '400'
    },
    logo: {
        marginTop: 20,
        height: 90,
        resizeMode: 'contain'
    }
})

export default Promo
