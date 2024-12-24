import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Calendar from '../Modals/Calendar';
import InputWrapper, { icons } from './InputWrapper';

interface DataFieldProps {
    title?: string;
    icon?: keyof typeof icons;
    parentWidth?: number;
    gap?: number;
    onChange?: (range: { startDate: Date | null; endDate: Date | null }) => void; // Пропс для передачи данных
}

const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
    });
};

const DataField: React.FC<DataFieldProps> = ({ title, icon, parentWidth, gap, onChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [range, setRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
        startDate: null,
        endDate: null,
    });

    const handleDateChange = (date: Date, type: 'START_DATE' | 'END_DATE') => {
        const updatedRange =
            type === 'START_DATE'
                ? { ...range, startDate: date }
                : { ...range, endDate: date };

        setRange(updatedRange);
        if (onChange) {
            onChange(updatedRange); // Передача данных через пропс onChange
        }
    };

    const confirmSelection = () => {
        setModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                style={
                    parentWidth && gap
                        ? { width: parentWidth / 2 - gap / 2 }
                        : { width: '100%' }
                }
                onPress={() => setModalVisible(true)}
            >
                <InputWrapper icon={icon}>
                    <Text
                        style={[styles.text, { paddingLeft: icon ? 40 : 20 }]}
                    >
                        {range.startDate && range.endDate
                            ? `${formatDate(range.startDate)} - ${formatDate(range.endDate)}`
                            : title || 'Выбор дат'}
                    </Text>
                </InputWrapper>
            </TouchableOpacity>

            <Calendar
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleDateChange={handleDateChange}
                confirmSelection={confirmSelection}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    text: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        fontFamily: 'Nunito',
        height: 40,
        textAlign: 'center',
    },
});

export default DataField;
