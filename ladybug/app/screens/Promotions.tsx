import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Promo from '../components/articles/Promo'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

const Promotions = () => {
  return (
    <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='Акции' subtitle='самые выгодные предложения' />

      <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <View style={styles.block}>
            <Image style={styles.image} source={require('../../assets/images/image-001.png')} />
          </View>

          <View style={styles.block}>
            <Image style={styles.image} source={require('../../assets/images/image-002.png')} />
          </View>

          <View style={styles.block}>
            <Image style={styles.image} source={require('../../assets/images/image-003.png')} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scroll: {

    },
    wrapper: {
      flex: 1,
      padding: 30,
      paddingVertical: 0,
      gap: 30,
      paddingBottom: 30
    },
    block: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    }
})

export default Promotions
