import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../utils/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const CustomButton = ({ text,
    isicon = false,
    onPress,
    fontFamily,
    type = "filled",
    bordered = false,
    bgcolor = Colors.green,
    borderedColor = Colors.green,
    size = "medium", }) => {



    const small = wp(16);
    const medium = wp(30);
    const large = wp(38);
    const extralarge = wp(90);

    const largeheight = hp(4.3);
    const smallheight = hp(3.5);
    const mediumheight = hp(4.2);


    const btnwidth = size === "large" ? large : size === "medium" ? medium : size === "extralarge" ? extralarge : small;
    const btnheight = size === "large" || size === "extralarge" ? largeheight : size === "medium" ? mediumheight : smallheight;
    // const btnBgColor = type === "filled" ? Colors.green : Colors.light_green;
    const btnTextColor = type === "filled" ? Colors.white : Colors.green;
    const btnBorderRadius = bordered ? 30 : 5;
    const textsize = 13;
    onPress = onPress;
    const containerCommonStyle = { backgroundColor: bgcolor, justifyContent: "center", width: btnwidth, height: btnheight, borderRadius: btnBorderRadius };
    const textCommonStyle = { color: btnTextColor, fontSize: textsize, fontFamily: fontFamily, textAlign: "center", fontWeight: 'bold' };
    //const iconstyle = { color: btnTextColor, fontSize: 16, fontFamily: fontFamily, textAlign: "center", fontFamily: "", fontWeight: 'bold' };

    const border = type === "outlined" && { borderColor: borderedColor, borderWidth: 1, };
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={[containerCommonStyle, border]}>
                <Text style={[textCommonStyle]}> {text} {isicon ? <Text style={[textCommonStyle]}>▸ </Text> : null} </Text>
            </View>
        </TouchableOpacity>
    );

};
export default CustomButton;