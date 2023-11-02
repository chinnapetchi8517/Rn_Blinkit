import React, { useRef, useMemo, useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, Button, TouchableOpacity, FlatList } from "react-native";
import CustomButton from "./CustomButton";
import { Colors } from "../utils/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Modal from 'react-native-modal'
import CartButton from "./Cartbutton";
import { useSelector } from "react-redux";
import CommonStyles, { BorderRadius, bgcolor, imageView, margin, marginTBRL } from "../utils/CommonStyles";
import { useDispatch } from 'react-redux';
import { addtoCart, cartitem } from "../redux/Actions";

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

];
const CategoryButton = () => {
    const dispatch = useDispatch();

    const isVisible = useSelector(state => state.state.isadditem);
    const listdata = useSelector(state => state.state.Cartitem);

    const [counter, setCounter] = useState(isVisible.count)
    const [selectindex, setSelectindex] = useState(0)
    const [itemCounts, setItemCounts] = useState({});
    const [res, setres] = useState([])
    const [isModalVisible, setModalVisible] = useState(false);
    const [countadd, setcountadd] = useState(false);
    // useEffect(() => {
    //     setres(isVisible.res)
    // }, [res])
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const flatList = useRef()
    useEffect(() => {
        if (countadd == true && counter >= 1) {

            var data = {
                isaddcart: true,
                count: counter,
                res: isVisible.res
            }
            dispatch(addtoCart(data));
            dispatch(cartitem(listdata))

        }



    }, [counter])
    useEffect(() => {



    }, [isVisible.isaddcart])
    const Countadd = (itemId, item) => {
        setcountadd(true)
        setCounter(isVisible.count += 1)
        isVisible.count += 1

        var objIndex = isVisible.res.findIndex((obj => obj.id == item.id));
        isVisible.res[objIndex].count += 1

        // var objI = listdata.findIndex((obj1 => obj1.id == item.id));
        // listdata[objI].count += 1

        // console.log(listdata, 'listttttttttttttttttttttttttttttt');
        setres(isVisible.res)




    }
    const Countremove = (itemId, item) => {
        setCounter(isVisible.count -= 1)

        var objIndex = isVisible.res.findIndex((obj => obj.id == item.id));
        isVisible.res[objIndex].count -= 1
        // var obji = listdata.findIndex((obj1 => obj1.id == item.id));
        // listdata[obji].count -= 1
        dispatch(cartitem(listdata))
        setres(isVisible.res)
        if (counter > 1) {
            setCounter(counter - 1)

        }
        if (isVisible.res[objIndex].count < 1) {
            var filterarr = isVisible.res.filter((items) => items.id != item.id)
            setres(filterarr)
            if (filterarr.length == 0) {
                setModalVisible(false)


            }

            var data = {
                isaddcart: false,
                count: counter,
                res: filterarr,
            }
            dispatch(addtoCart(data));
        }


    }
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={[CommonStyles.CenterAlign, margin(0, hp(0.8))]}>



                <View style={[CommonStyles.Spacebetween, margin(10, 0)]}>
                    <Image source={require('../assets/grocery.jpg')} style={[imageView(hp(8), wp(16)), BorderRadius(10)]}></Image>
                    <View >
                        <Text numberOfLines={2} style={[margin(10, 0), styles.Textstylebold, { width: wp(47), }]}>{item.name}
                        </Text>
                        <Text style={[margin(10, 0), styles.Textgrey]}>500 g
                        </Text>

                        <View style={[CommonStyles.Row, margin(10, 0),]}>
                            <Text style={[styles.Textgrey, { color: Colors.black }]}>₹118
                            </Text>
                            <Text style={[margin(10, 0), styles.Textgrey]}>₹120
                            </Text>
                        </View>
                    </View>
                    <View style={[margin(0, 10),]}>
                        <CartButton value={item.count} add={() => { Countadd(index, item) }} remove={() => { Countremove(index, item) }}  ></CartButton>
                    </View>

                </View>

            </View>
        )
    }
    const ListHeader = () => {
        return (
            <View style={[CommonStyles.flexStart, margin(10, 0), marginTBRL(10, 10, 0, 0)]}>
                <Text numberOfLines={2} style={[styles.Textstylebold, margin(10, 0), { fontSize: 24 }]}> ⌚
                </Text>
                <View>
                    <Text numberOfLines={2} style={[styles.Textstylebold, margin(10, 0)]}> Delivery in 8 Minutes
                    </Text>
                    <Text style={[styles.Textgrey, margin(10, 0)]}> Shipment of 10 items
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{
        }}>
            <Image source={require('../assets/category.jpg')} style={[imageView(hp(8), wp(16)), CommonStyles.BottomView, { right: wp(5), bottom: isVisible ? hp(8) : hp(3) }]}>
            </Image>


            <Modal

                isVisible={isModalVisible}
                onBackButtonPress={toggleModal}
                style={styles.bottomModal}
            >
                <TouchableOpacity onPress={() => toggleModal()} style={[CommonStyles.Row, CommonStyles.CenterAlign, marginTBRL(0, hp(1.5))]}>
                    <Image source={require('../assets/tclose.png')} style={[imageView(hp(4), wp(8))]}></Image>

                </TouchableOpacity>
                <View style={[CommonStyles.CenterAlign, bgcolor(Colors.transparent)]}>
                    <View style={[bgcolor(Colors.white), styles.modalContent]}>

                        <FlatList
                            ref={flatList}
                            ListHeaderComponent={ListHeader}
                            showsVerticalScrollIndicator={false}
                            data={isVisible.res}
                            renderItem={(item, index) => renderItem(item, index)}
                            style={[CommonStyles.ShadowEffet, marginTBRL(15, 0, 15, 15), BorderRadius(12), { maxHeight: hp(70) }]}>

                        </FlatList>


                    </View>
                    <View style={{ paddingBottom: 28 }}></View>
                </View>
                <View style={[CommonStyles.ShadowEffet, bgcolor(Colors.white), styles.bottomView]}>

                    <View style={[CommonStyles.Spacebetween, margin(10, 20)]}>
                        <TouchableOpacity onPress={() => toggleModal()} style={CommonStyles.Row}>
                            <Image source={require('../assets/grocery.jpg')} style={[imageView(hp(4), wp(9))]}></Image>
                            <Text style={[styles.Textstylebold, margin(10, 0)]}> {isVisible.count} ITEMS  ▴
                            </Text>
                        </TouchableOpacity>
                        <CustomButton size='large' isicon={true} text={'Next'} type='filled'  ></CustomButton>

                    </View>

                </View>
            </Modal>
            {isVisible.isaddcart ?
                <View style={[CommonStyles.ShadowEffet, bgcolor(Colors.white), styles.bottomView]}>

                    <View style={[CommonStyles.Spacebetween, margin(10, 20)]}>
                        <TouchableOpacity onPress={() => toggleModal()} style={CommonStyles.Row}>
                            <Image source={require('../assets/grocery.jpg')} style={[imageView(hp(4), wp(9))]}></Image>
                            <Text style={[styles.Textstylebold, margin(10, 0)]}> {isVisible.count} ITEMS  ▴
                            </Text>
                        </TouchableOpacity>
                        <CustomButton size='large' isicon={true} text={'Next'} type='filled'  ></CustomButton>

                    </View>

                </View>
                : null}
        </View>
    )

}
const styles = StyleSheet.create({


    Textstylebold: {
        fontSize: 13, color: 'black', fontWeight: '600',
    },
    Textgrey: {
        fontSize: 11, color: 'grey',
    }
    ,
    bottomView: {
        width: wp(100),
        height: hp(6.5),
        borderTopRightRadius: 9,
        borderTopLeftRadius: 9,

        backgroundColor: 'white',
        bottom: 0, position: 'absolute',
        justifyContent: 'center',
    },


    modalContent: {
        width: wp(100),
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingBottom: 29


    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },



});


export default CategoryButton;