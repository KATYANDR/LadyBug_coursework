import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TextField from '../Inputs/TextField';
import DataField from '../Inputs/DataField';
import SimpleText from '../Inputs/SimpleText';
import SelectPersonCount from '../Modals/SelectPersonCount';
import { useFilter } from '../../context/FilterContext';
import { useNavigation } from '@react-navigation/native';

const cities = [
    { label: 'Из Москвы', value: 'moscow' },
    { label: 'Из Санкт-Петербурга', value: 'spb' },
    { label: 'Из Новосибирска', value: 'novosibirsk' },
    { label: 'Из Казани', value: 'kazan' },
    { label: 'Из Екатеринбурга', value: 'yekaterinburg' },
];

const Tours = () => {
    const [open, setOpen] = useState(false); // Открытие выпадающего списка
    const [value, setValue] = useState('moscow'); // Выбранный город
    const [items, setItems] = useState(cities);
    const [parentWidth, setParentWidth] = useState<number>(0); // Ширина родителя

    const [isPersonModalVisible, setIsPersonModalVisible] = useState(false); // Открытие модального окна
    const [adultsCount, setAdultsCount] = useState<number>(2); // Количество взрослых по умолчанию

    const [price, setPrice] = useState<string>('');

    const { updateFilter } = useFilter();

    const handleDate = (range: { startDate: Date | null; endDate: Date | null }) => {
        const { startDate, endDate } = range;
        updateFilter('startDate', startDate);
        updateFilter('endDate', endDate);
    }

    const navigator = useNavigation<any>();


    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width); // Сохраняем ширину в состоянии
    };

    const openPersonModal = () => setIsPersonModalVisible(true);
    const closePersonModal = () => setIsPersonModalVisible(false);

    const handleSearchTours = () => {
        updateFilter('price', price);
        // console.log(122);
        navigator.navigate('index2');
    }

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

            <TextField placeholder="Введите цену" value={price} setValue={setPrice} />

            <View
                onLayout={handleLayout} // Отслеживаем размеры компонента
                style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}
            >
                <DataField onChange={handleDate} icon="calendar" parentWidth={parentWidth} gap={20} />
                <DataField icon="clock" title="Ночей" parentWidth={parentWidth} gap={20} />
            </View>

            <View
                onLayout={handleLayout} // Отслеживаем размеры компонента
                style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}
            >
                {/* Добавляем SimpleText с количеством взрослых */}
                <SimpleText
                    title={`${adultsCount} взрослых`}
                    parentWidth={parentWidth}
                    gap={20}
                    icon="user"
                    onPress={openPersonModal} // Открываем модальное окно при нажатии
                />
                <SimpleText title="Фильтры" parentWidth={parentWidth} gap={20} icon="filter" />
            </View>

            <View style={{ marginTop: 30 }}>
                <SimpleText onPress={handleSearchTours} title="Найти туры" />
            </View>

            {/* Модальное окно для выбора количества взрослых */}
            <SelectPersonCount
                isVisible={isPersonModalVisible}
                onClose={closePersonModal}
                onSelect={(count: number) => setAdultsCount(count)}
                title='Количество взрослых'
            />
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

export default Tours;
