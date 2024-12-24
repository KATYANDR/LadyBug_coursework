import { Image, StyleSheet, View } from "react-native"

export const images = {
    calendar: require('../../assets/images/calendar.png'),
    fire: require('../../assets/images/fire.png'),
    search: require('../../assets/images/search.png'),
    mapMarker: require('../../assets/images/map-marker.png'),
    phone: require('../../assets/images/phone.png'),

    backArrow: require('../../assets/images/back-arrow.png'),
    link: require('../../assets/images/link.png'),
    // backArrow: require('../../assets/images/back-arrow.png'),
  };
  

interface IconProps {
  name: keyof typeof images;
  size?: number;
  focused?: boolean;
}

export const TabIcon: React.FC<IconProps> = ({name, size = 45, focused}) => {
    return (
        <View style={styles.container}>
            {/* <View style={{ position: 'absolute', backgroundColor: focused ? '#3c24' : 'transparent', width: size * 1.5, height: size * 2, top: -size / 2 }} /> */}
            <Image
                style={[{ width: size, height: size }]}
                source={images[name]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#000a',
        shadowRadius: 5,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        borderRadius: 10
    }
})