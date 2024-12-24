import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

interface TabMenuProps {
    setActiveTab: (index: number) => void;
}
const TabMenu: React.FC<TabMenuProps> = ({ setActiveTab }) => {
    const selectorPosition = useRef(new Animated.Value(0)).current; // Animated.Value должен быть создан с useRef

    // Функция для обновления активной вкладки
    const handleTabPress = (index: number) => {
        setActiveTab(index);

        // Анимация перемещения селектора
        Animated.timing(selectorPosition, {
            toValue: index, // Значение анимации зависит от индекса вкладки
            duration: 300, // Длительность анимации в миллисекундах
            useNativeDriver: false, // Для перемещения стилей, таких как `left`, нужен `false`
        }).start();
    };

    return (
        <View style={styles.tabMenu}>
            <LinearGradient
                start={[0, 0]}
                end={[1, 0]}
                colors={['#2B4D66', '#D5EAFC', '#2B4D66']}
                style={styles.gradient}
            >
                <Animated.View
                    style={[
                        styles.selector,
                        {
                            left: selectorPosition.interpolate({
                                inputRange: [0, 1], // Соответствие индексов вкладок
                                outputRange: [4, 155], // Начальная и конечная позиции
                            }),
                        },
                    ]}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleTabPress(0)} // При нажатии переключаем на вкладку "Туры"
                >
                    <Text style={styles.text}>Туры</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleTabPress(1)} // При нажатии переключаем на вкладку "Отели"
                >
                    <Text style={styles.text}>Отели</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    tabMenu: {
        marginTop: 15,
        marginHorizontal: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 40,
        padding: 2,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        height: '100%',
        borderRadius: 20,
    },
    button: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 20,
    },
    selector: {
        position: 'absolute',
        width: '50%',
        height: 30,
        backgroundColor: '#F5FAFC',
        borderRadius: 20,
    },
});

export default TabMenu;
