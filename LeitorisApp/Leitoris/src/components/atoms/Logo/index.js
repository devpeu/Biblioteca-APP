import React from 'react'
import { StyleSheet, View, Image } from "react-native";
import logoImage from '../../../../assets/LogoEmpire.png'


export const Logo = () => {
    return (
        <Image style={styles.logo} source={logoImage}/>
    )
}


const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 250,
  },
});