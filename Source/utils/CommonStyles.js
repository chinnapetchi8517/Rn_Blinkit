import React from "react";
import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({

    CenterAlign: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    Spacebetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Spacearound: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    SpaceEvenly: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    flexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    flexend: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    SelfCenter: {
        alignSelf: 'center'
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Column: {
        flexDirection: 'column'
    },
    BottomView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    CenterView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    TextRegular: {
        fontSize: 12,

    },
    TextMedium: {
        fontSize: 14,

    },
    TextBold: {
        fontSize: 16,
    },
    ShadowEffet: {
        elevation: 1.2,
        backgroundColor: 'white',
        shadowOffset: { width: 2, height: 6 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
    },

})
export default CommonStyles;


export const flex = value => {
    return {
        flex: value,
    };
};
export const flexGrow = flexValue => {
    return {
        flexGrow: flexValue,
    };
};
export const imageView = (heightValue, widthValue) => {
    return {
        height: heightValue,
        width: widthValue,
    };
};
export const marginTBRL = (topvalue, bottomvalue, Leftvalue, rightvalue) => {
    return {
        marginTop: topvalue,
        marginBottom: bottomvalue,
        marginLeft: Leftvalue,
        marginRight: rightvalue,
    };
};
export const margin = (marginHorizontalValue, marginVerticalValue) => {
    return {
        marginHorizontal: marginHorizontalValue,
        marginVertical: marginVerticalValue,
    };
};

export const padding = (paddingHorizontalValue, paddingVerticalValue) => {
    return {
        paddingHorizontal: paddingHorizontalValue,
        paddingVertical: paddingVerticalValue,
    };
};

export const bgcolor = Colorcode => {
    return {
        backgroundColor: Colorcode,
    };
};
export const BorderRadius = value => {
    return {
        borderRadius: value,
    };
};

