import React from 'react'
import { Text, View } from "react-native";
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../utils/Colors';
import HorizontalFlatList from '../../components/HorizondalList';
const Home = (props) => {
    return (
        <View style={{ flex: 1, }}>
            <HorizontalFlatList></HorizontalFlatList>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CustomButton onPress={() => props.navigation.navigate('Cart')} bgcolor={Colors.light_green} size='small' text={'ADD'} type='outlined'  ></CustomButton>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CustomButton onPress={() => props.navigation.navigate('Scrollpage')} borderedColor={Colors.light_grey} bgcolor={'transparent'} size='medium' text={'See all'} type='outlined'  ></CustomButton>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CustomButton size='medium' text={'Add to cart'} type='filled'  ></CustomButton>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CustomButton size='large' isicon={true} text={'Next'} type='filled'  ></CustomButton>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20, }}>
                <CustomButton bordered={true} bgcolor={Colors.dark_grey} size='extralarge' text={'Continue'} type='filled'  ></CustomButton>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CustomButton size='extralarge' text={'Continue'} type='outlined' bgcolor={'transparent'}  ></CustomButton>

            </View>

        </View>
    )
}
export default Home;