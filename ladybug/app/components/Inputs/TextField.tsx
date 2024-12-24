import React from 'react'
import InputWrapper, { icons } from './InputWrapper'
import { StyleSheet, TextInput } from 'react-native'

interface TextFieldProps {
    placeholder?: string;
    icon?: keyof typeof icons;
    value?: string;
    setValue?: (value: string) => void
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, icon, value, setValue }) => {
    return (
        <InputWrapper icon={icon}>
            <TextInput value={value} onChangeText={setValue} keyboardType='decimal-pad' style={[styles.textField, { paddingLeft: icon ? 50 : 20}]} placeholder={placeholder} />
        </InputWrapper>
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        fontFamily: 'Nunito',
        height: 40,
    }
})

export default TextField
