import { TourType } from '../../apiController/getTours';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Определяем параметры стека навигации
export type TourStackParamList = {
    Tours: undefined; // Экран без параметров
    TourInfo: TourType; // Параметры для TourInfo
    Reservation: TourType; // Параметры для Reservation
};

// Для типизации пропсов компонентов
export type TourInfoRouteProp = RouteProp<TourStackParamList, 'TourInfo'>;
export type TourInfoScreenProp = StackNavigationProp<TourStackParamList, 'TourInfo'>;
export type ReservationRouteProp = RouteProp<TourStackParamList, 'Reservation'>;
export type ReservationScreenProp = StackNavigationProp<TourStackParamList, 'Reservation'>;
