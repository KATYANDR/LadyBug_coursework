import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'

interface CalendarProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    handleDateChange: (date: Date, type: 'START_DATE' | 'END_DATE') => void;
    confirmSelection: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ modalVisible, setModalVisible, handleDateChange, confirmSelection }) => {
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
             onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.calendarContainer}>
                    <CalendarPicker
                        startFromMonday
                        headerWrapperStyle={{paddingHorizontal: 25}}
                        textStyle={{fontFamily: 'Nunito'}}

                        nextTitle='Вперёд'
                        previousTitle='Назад'

                        onDateChange={handleDateChange}

                        selectedRangeStyle={{ backgroundColor: '#2b4d66dd' }}

                                selectedDayColor='#fff'
                                selectedDayTextStyle={{color: '#fff'}}
                                months={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']}
                                weekdays={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']}
                                allowRangeSelection
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.buttonText}>Отмена</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={confirmSelection}
                                >
                                    <Text style={styles.buttonText}>Применить</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 0,
        paddingVertical: 10,
        width: '100%',
        transform: 'scale(0.85)'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    },
    button: {
        padding: 10,
        color: '#2b4d66',
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#2b4d66',
        fontWeight: 'bold',
    },
})

export default Calendar
