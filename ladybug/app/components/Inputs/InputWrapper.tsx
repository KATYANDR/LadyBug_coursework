import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const icons = {
    'geo': require('../../../assets/images/geo.png'),
    'add-comment': require('../../../assets/images/add-comment.png'),
    'calendar': require('../../../assets/images/calendar-days.png'),
    'clock': require('../../../assets/images/clock.png'),
    'user': require('../../../assets/images/user.png'),
    'filter': require('../../../assets/images/filter.png'),
    'message-check': require('../../../assets/images/message-check.png'),
}
interface InputWrapperProps {
    children: React.ReactNode;
    icon?: keyof typeof icons;
}
const InputWrapper: React.FC<InputWrapperProps> = ({children, icon}) => {
  return (
    <View style={styles.inputWrapper__container}>
        { icon && <Image style={styles.textField__image} source={icons[icon]} /> }
        { children }
    </View>
  )
}

const styles = StyleSheet.create({
    inputWrapper__container: {
        minWidth: '30%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textField__image: {
        width: 38,
        height: 38,
        padding: 5,
        marginHorizontal: 5,
        resizeMode: 'contain',
        position: 'absolute'
    },
})

export default InputWrapper
