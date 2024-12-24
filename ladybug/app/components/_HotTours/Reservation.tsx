import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from './Header'
import { TourType } from '../../apiController/getTours';
import Rate from '../InfoBlocks/Rate';
import TextField from '../Inputs/TextField';
import { LinearGradient } from 'expo-linear-gradient';
import SimpleText from '../Inputs/SimpleText';
import { ReservationRouteProp } from '../../navigation/_Tours/TourStackParams';
import { Bid, createBid } from '../../apiController/createBid';

const Reservation: React.FC<{ route: ReservationRouteProp }> = ({ route }) => {
  const params = route.params as TourType;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const [parentWidth, setParentWidth] = useState<number>(0);

    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    };

  const handleCreateBid = () => {
    const bid: Bid = {
      name: name,
      phone: number,
      email: email,
      TourName: params.title,
      comment: '',
      code: ''
    }
    createBid(bid).then(result => {
      if (result != null) {
        Alert.alert('Успех', 'Заявка создана');
      } else {
        Alert.alert('Ошибка', 'Заявка не отправлена');
      }
    });
  }

  return (
    <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
        <Header title={'бронирование'} />
        <View style={styles.content}>
          <Text style={styles.titleText}>{params.title}</Text>
          <View style={{paddingVertical: 15}}>
            <Rate rate={params.rate} />
          </View>

          <View style={{paddingVertical: 30, marginTop: 20, gap: 25}}>
            <Text style={{fontFamily: 'Nunito', textAlign: 'center', fontSize: 20, fontWeight: 400}}>Запрос информации по туру</Text>
            <TextField value={name} setValue={setName} placeholder='Фамилия, имя' />
            <TextField value={number} setValue={setNumber} placeholder='Мобильный телефон' />
            <TextField value={email} setValue={setEmail} placeholder='Email' />

            <View
                onLayout={handleLayout}
                style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}
            >
                <SimpleText title='Комментарий' parentWidth={parentWidth} gap={20} icon='add-comment' />
                <SimpleText title='Промокод' parentWidth={parentWidth} gap={20} icon='message-check' />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCreateBid}>
              <Text style={styles.buttonText}>Оставить заявку</Text>
            </TouchableOpacity>
          </View>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
      padding: 20
    },
    titleText: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: 'Nunito',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2B4D66',
    borderRadius: 30,
    padding: 10,
},
buttonText: {
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: 15,
    textAlign: 'center'
},
});

export default Reservation
