//import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Coordenada } from "../types/types";
import Animated, { Keyframe } from 'react-native-reanimated';

interface BolaProps {
    valor: Coordenada;
    long: number;
    alto: number;
    ancho: number;
    pos: number;
    direccion: any;
}


export default function Bola2({ valor, long, alto, ancho, pos, direccion }: BolaProps): JSX.Element {


    const keyframeIn = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 0.4,
            transform: [{ translateX: Math.floor(ancho / 7) - 5 }],
        },
        100: {
            opacity: 0,
            transform: [{ translateX: 0 }],
        },
    }).duration(400);

    const keyframeIn2 = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 0.4,
            transform: [{ translateX: -(Math.floor(ancho / 7) - 5) }],
        },
        100: {
            opacity: 0,
            transform: [{ translateX: 0 }],
        },
    }).duration(400);

    const keyframeExit = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        50: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
        100: {
            opacity: 1,
            transform: [{ translateX: 0 }],
        },
    }).duration(300);


    // constuyendo el tamaño de las bolas segun el tamaño del view
    const StyleBola9 = {
        width: Math.floor(ancho / 3) - 5,
        height: Math.floor(alto / 3) - 5,
        backgroundColor: valor.color
    };

    const StyleBola25 = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color
    };
    const StyleBola25G = {
        width: Math.floor(ancho / 4) - 5,
        height: Math.floor(alto / 4) - 5,
        backgroundColor: valor.color
    };

    const StyleBola49 = {
        width: Math.floor(ancho / 7) - 5,
        height: Math.floor(alto / 7) - 5,
        borderWidth: 1,
        backgroundColor: valor.color,
    };
    //declaración de bola transparente
    const StyleBola49Trans = {
        width: Math.floor(ancho / 7) - 5,
        height: Math.floor(alto / 7) - 5,
        backgroundColor: 'transparent',
    };
    //declaración de bola transparente
    const StyleBola49L = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        left: -((Math.floor(ancho / 5) - 5) / 3) - 2,
        top: -2
    };
    const StyleBola49B = {
        width: Math.floor(ancho / 5) - 5,
        height: Math.floor(alto / 5) - 5,
        backgroundColor: valor.color,
        borderRadius: 13,
        borderWidth: 1,
        position: 'absolute',
        top: (Math.floor(ancho / 5) - 5) / 3,
        left: -2

    };
    //console.log('mix1', direccion)

    return (
        <View>
            <View style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, StyleBola25] : pos === 21 || pos === 45 ? [styles.bola49, StyleBola49Trans] : [styles.bola49, StyleBola49]} />
            {/* {direccion === 2 ? <Animated.View exiting={keyframeIn} style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, StyleBola25] : pos === 27 || pos === 45 ? [styles.bola49, StyleBola49Trans] : [styles.bola49, StyleBola49]} /> : ""}
            {direccion === 3 ? <Animated.View exiting={keyframeIn2} style={long === 9 ? [styles.bola9, StyleBola9] : long === 25 ? [styles.bola25, StyleBola25] : pos === 27 || pos === 45 ? [styles.bola49, StyleBola49Trans] : [styles.bola49, StyleBola49]} /> : ""} */}
            {pos === 45 && long === 49 ? <Animated.View style={StyleBola49B} /> : ""}
            {pos === 21 && long === 49 ? <Animated.View style={StyleBola49L} /> : ""}
        </View>
    )

}

const styles = StyleSheet.create({
    bola9: {
        // width: '30.5%',
        // height: '30.5%',
        borderRadius: 25,
        //backgroundColor: Colors.tertiary,
        borderWidth: 2,
        margin: 2,
    },
    bola25: {
        // width: '17%',
        // height: '17%',
        borderRadius: 13,
        //backgroundColor: Colors.tertiary,
        borderWidth: 2,
        margin: 2,
    },
    bola49: {
        // width: '11.5%',
        // height: '11.5%',
        borderRadius: 13,
        //backgroundColor: Colors.tertiary,
        //borderWidth: 1,
        margin: 2,
    },

})