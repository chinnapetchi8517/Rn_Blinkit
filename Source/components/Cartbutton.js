
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../utils/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CommonStyles from "../utils/CommonStyles";
const CartButton = (props) => {



    const small = wp(16);

    const smallheight = hp(3.5);

    const containerCommonStyle = { backgroundColor: Colors.green, width: small, height: smallheight, borderRadius: 5 };
    const textCommonStyle = { color: Colors.white, fontSize: 12, fontWeight: 'bold', };

    return (
        <View style={{ ...CommonStyles.Spacebetween, ...containerCommonStyle }} activeOpacity={0.5}>
            <TouchableOpacity style={{ marginLeft: 6 }} onPress={props.remove}>
                <Text style={[textCommonStyle]}> -</Text>
            </TouchableOpacity>

            <Text style={[textCommonStyle]}> {props.value}</Text>

            <TouchableOpacity onPress={props.add} >
                <Text style={[textCommonStyle]}>+  </Text>
            </TouchableOpacity>
        </View>
    );

};
export default CartButton;