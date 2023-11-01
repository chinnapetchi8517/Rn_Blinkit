import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import HorizontalFlatList from '../../components/HorizondalList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Scrollpage = () => {
    const scrollViewRef = useRef(null);

    const [offset, setoffect] = useState(0)
    const [showButton, setShowButton] = useState(false);

    const handleScroll = (event) => {
        const positionY = event.nativeEvent.contentOffset.y;
        const positionTop = Dimensions.get('window').height / 4;
        if (positionY > positionTop) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };
    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>
                <HorizontalFlatList></HorizontalFlatList>

            </ScrollView>

            {showButton && (
                <TouchableOpacity style={styles.button} onPress={scrollToTop}>
                    <Text style={styles.buttonText}>Back to Top</Text>
                </TouchableOpacity>
            )}
        </View>


    );
}

const styles = StyleSheet.create({

    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
    button: {
        position: 'absolute',
        right: wp(40),
        bottom: hp(50),
        //top: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },


})
export default Scrollpage;