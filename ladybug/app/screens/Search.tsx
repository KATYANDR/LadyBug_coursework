import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Promo from '../components/articles/Promo';
import { LinearGradient } from 'expo-linear-gradient';
import TabMenu from '../components/Menus/TabMenu';
import Hotels from '../components/_Search/Hotels';
import Tours from '../components/_Search/Tours';

const Search = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='ladybug' subtitle='your freedom' isLogo />

            <View>
                <TabMenu setActiveTab={setActiveTab} />
                {activeTab === 0 && <Tours />}
                {activeTab === 1 && <Hotels />}
            </View>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Search;
