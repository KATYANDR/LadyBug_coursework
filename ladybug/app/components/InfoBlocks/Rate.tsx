import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Rate = ({rate}: {rate: number}) => {
    return (
        <View style={{ flexDirection: 'row', gap: 1 }}>
            { Array(rate).fill(0).map((_, index) => (
                index % 2 === 0 ? (
                    <Image
                        style={styles.iconStar}
                        key={index}
                        source={require('../../../assets/images/star.png')}
                    />
                ) : null
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    iconStar: {
        width: 20,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
})

export default Rate
