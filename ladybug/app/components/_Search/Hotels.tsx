import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TextField from '../Inputs/TextField';
import DataField from '../Inputs/DataField';
import SimpleText from '../Inputs/SimpleText';

const cities = [
    { label: 'Из Москвы', value: 'moscow' },
    { label: 'Из Санкт-Петербурга', value: 'spb' },
    { label: 'Из Новосибирска', value: 'novosibirsk' },
    { label: 'Из Казани', value: 'kazan' },
    { label: 'Из Екатеринбурга', value: 'yekaterinburg' },
];

const Hotels = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('moscow');
    const [items, setItems] = useState(cities);
    const [parentWidth, setParentWidth] = useState<number>(0); // Состояние для ширины родителя

    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width); // Сохраняем ширину в состоянии
    };

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Выберите город"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.text}
            />

            <TextField placeholder="Введите город или отель" icon="geo" />

            <DataField icon="calendar" />

            <View
                onLayout={handleLayout} // Отслеживаем размеры компонента
                style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}
            >
                <SimpleText title='2 взрослых' parentWidth={parentWidth} gap={20} icon='user' />
                <SimpleText title='Фильтры' parentWidth={parentWidth} gap={20} icon='filter' />
            </View>

            <View style={{marginTop: 30}}>
                <SimpleText title='Найти туры' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 30,
        marginTop: 10,
        padding: 10,
        paddingVertical: 5,
        gap: 20,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 8,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        padding: 0,
        margin: 0,
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: '400',
    },
});

export default Hotels;
