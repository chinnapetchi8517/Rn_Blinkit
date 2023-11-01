import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../utils/Colors';
import CustomButton from './CustomButton';

const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 1' },
    { id: '5', text: 'Item 2' },
    { id: '6', text: 'Item 3' },
    { id: '7', text: 'Item 1' },
    { id: '8', text: 'Item 2' },
    { id: '9', text: 'Item 3' },
    { id: '10', text: 'Item 1' },
    { id: '11', text: 'Item 2' },
    { id: '12', text: 'Item 3' }
    // ... add as many items as you like
];

const HorizontalFlatList = (
    // image,
    // mins,
    // title1,
    // title2,
    // unit,
    // amount,
    // lessamount,
    props
) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={require('../assets/veges.jpg')} style={{ width: wp(25), marginTop: 10, height: hp(18) }}></Image>
                <Text style={{ width: wp(10), backgroundColor: '#f2f3f7', fontSize: 10, marginTop: 10, color: 'black', padding: 2, borderRadius: 5 }}>{' 9 mins'}</Text>
                <Text style={{ fontSize: 13, marginTop: 10, color: 'black', borderRadius: 30 }}>boAt Airdopes 148
                </Text>
                <Text style={{ fontSize: 13, marginTop: 2, color: 'black', borderRadius: 30 }}>(White purity)</Text>
                <Text style={{ fontSize: 10, color: 'grey', marginTop: 5, marginBottom: 5 }}>{'1 unit'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 13, marginTop: 2, color: 'black', borderRadius: 30 }}>$999</Text>
                        <Text style={{ width: wp(10), fontSize: 10, color: 'grey', }}>{'$4,490'}</Text>

                    </View>

                    <CustomButton bgcolor={Colors.light_green} size='small' text={'ADD'} type='outlined'  ></CustomButton>
                </View>

            </View>
        );
    };

    return (
        <FlatList
            style={{ backgroundColor: 'white' }}
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {

        marginHorizontal: 10,
        // backgroundColor: 'red'
        // borderRadius: 5,
    },
});

export default HorizontalFlatList;
