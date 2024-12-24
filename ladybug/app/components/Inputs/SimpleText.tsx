import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import InputWrapper, { icons } from './InputWrapper'

interface SimpleTextProps {
    title: string;
    icon?: keyof typeof icons;
    parentWidth?: number;
    gap?: number
    onPress?: () => void;
}

const SimpleText: React.FC<SimpleTextProps> = ({ title, icon, parentWidth, gap, onPress }) => {
  return (
    <>
        <TouchableOpacity onPress={onPress} style={parentWidth && gap ? {width: parentWidth / 2 - gap / 2} : {width: '100%'}}>
            <InputWrapper icon={icon}>
                <Text style={[styles.text, { paddingLeft: icon ? 50 : 20}]}>{title}</Text>
            </InputWrapper>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        fontFamily: 'Nunito',
        height: 40,
        textAlign: 'center'
    }
})

export default SimpleText
