import React, { useState, useEffect } from "react";
import { View, Button, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useDispatch } from 'react-redux';
import { addtoCart } from "../../redux/Actions";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import CommonStyles, { BorderRadius, bgcolor, imageView, margin, marginTBRL } from "../../utils/CommonStyles";
import CartButton from "../../components/Cartbutton";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
const arrdata = [
    { id: '1', text: 'Item 1', name: 'Whole Farm Arhar Dal/Toor Dal Premium', count: 1 },
    { id: '2', text: 'Item 2', name: 'Whole Farm ', count: 1 },
    { id: '3', text: 'Item 3', name: 'Arhar Dal/Toor', count: 1 },
    { id: '4', text: 'Item 4', name: ' Dal Premium', count: 1 },
    { id: '5', text: 'Item 5', name: 'Arhar Dal', count: 1 },
    { id: '6', text: 'Item 6', name: 'Premium', count: 1 },


];
const Cart = () => {
    const dispatch = useDispatch();
    const [isadd, setisAdd] = useState(false)

    const [additem, setaddItem] = useState(false);
    const [counter, setCounter] = useState(1)
    const [itemCounts, setItemCounts] = useState({});
    const [res, setres] = useState([])
    const [selectindex, setSelectindex] = useState()
    const [newarrDAta, setnewarrDAta] = useState([])
    const onCLick = (index, item) => {
        arrdata.map((item, i) => {
            if (i === index) {
                arrdata[index].selected = true;
                arrdata[index].count + 1
                // setCounter(counter + 1)

            }
        })
        setnewarrDAta([...arrdata])
        res.push(item)
        // console.log(arrdata, 'arrdata');
        res.map((itemres, i) => {
            if (item.id != itemres.id) {
                setCounter(counter + 1)
            }

        })
        var data = {
            isaddcart: true,
            count: counter,
            res: res,
        }
        dispatch(addtoCart(data));
    }
    useEffect(() => { }, [newarrDAta])
    useEffect(() => {
        setnewarrDAta(arrdata);
    }, []);
    useEffect(() => {
        if (isadd && counter >= 1) {


            var data = {
                isaddcart: true,
                count: counter,
                res: res
            }
            dispatch(addtoCart(data));
        }

    }, [counter])

    const Countadd = (itemId, item) => {
        console.log(item, 'counter');
        // item.count + 1
        setCounter(counter + 1)

        var objIndex = res.findIndex((obj => obj.id == item.id));
        res[objIndex].count += 1

        setres(res)

        setItemCounts({
            ...itemCounts,
            [itemId]: (itemCounts[itemId] || 1) + 1,
        });


    }
    const Countremove = (itemId, item) => {
        var objIndex = res.findIndex((obj => obj.id == item.id));
        console.log(res[objIndex].count, 'res[objIndex].count');
        if (res[objIndex].count == 1) {
            res.splice(0, 1)
            arrdata[objIndex].selected = false
            arrdata.map((item, i) => {
                if (i === itemId) {
                    arrdata[itemId].selected = false;

                }
            })
            setnewarrDAta([...arrdata])
            setres(res)
        } else {
            var objIndex = res.findIndex((obj => obj.id == item.id));
            if (res[objIndex].count >= 1) {
                res[objIndex].count -= 1
            }

            setres(res)
            // if (res[objIndex].count < 1) {
            //     res.splice(0, 1)
            //     arrdata[objIndex].selected = false
            // }

        }



        // var sampleres;
        // res.map((itemres, i) => {
        //     if (itemres.count < 1) {
        //         sampleres = res.splice(0, itemId)
        //     }
        //     // if (item.id != itemres.id) {
        //     //     setCounter(counter - 1)
        //     //    
        //     // }

        // })
        // setres(sampleres);

        if (itemCounts[itemId] > 1) {
            setItemCounts({
                ...itemCounts,
                [itemId]: itemCounts[itemId] - 1,
            });
        }
        if (counter > 1) {
            setCounter(counter - 1)
        }


    }
    console.log(counter, 'counter');
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={[CommonStyles.CenterAlign, margin(0, hp(0.8))]}>



                <View style={[CommonStyles.Spacebetween, margin(10, 0)]}>
                    {/* <Text style={[margin(10, 0), styles.Textstylebold]}>{item.id}</Text> */}
                    <Image source={require('../../assets/grocery.jpg')} style={[imageView(hp(8), wp(16)), BorderRadius(10)]}></Image>
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
                        {item.selected ?
                            <CartButton value={itemCounts[index] || '1'} add={() => { Countadd(index, item) }} remove={() => { Countremove(index, item) }}  ></CartButton>
                            : <CustomButton onPress={() => { setisAdd(true), onCLick(index, item) }} bgcolor={Colors.light_green} size='small' text={'ADD'} type='outlined'  ></CustomButton>
                        }
                        {/* <CartButton value={itemCounts[index] || item.count} add={() => { Countadd(index) }} remove={() => { setSelectindex(index), Countremove(index) }}  ></CartButton> */}
                    </View>

                </View>

            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList

                showsVerticalScrollIndicator={false}
                data={newarrDAta}
                renderItem={(item, index) => renderItem(item, index)}
                style={[CommonStyles.ShadowEffet, BorderRadius(12),]}>

            </FlatList>
            {/* <View style={[CommonStyles.Spacebetween, margin(10, 30)]}>
                <Image source={require('../../assets/grocery.jpg')} style={[imageView(hp(8), wp(16)), BorderRadius(10)]}></Image>
                <View >
                    <Text numberOfLines={2} style={[margin(10, 0), styles.Textstylebold, { width: wp(47), }]}>Whole Farm Arhar Dal/Toor Dal Premium
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
                    {isadd ?
                        <CartButton value={itemCounts[0] || '1'} add={() => { Countadd(0) }} remove={() => { Countremove(0) }}  ></CartButton>
                        : <CustomButton onPress={() => { onCLick(), setisAdd(true) }} bgcolor={Colors.light_green} size='small' text={'ADD'} type='outlined'  ></CustomButton>
                    }
                </View>

            </View> */}
            {/* <View style={{ justifyContent: 'center', marginHorizontal: 20, marginVertical: 20 }}>
                <Button onPress={() => { onCLick1() }} title="Remove From Cart"></Button>
            </View> */}

        </View>

    )
}
const styles = StyleSheet.create({


    Textstylebold: {
        fontSize: 13, color: 'black', fontWeight: '600',
    },
    Textgrey: {
        fontSize: 11, color: 'grey',
    },




});
export default Cart;