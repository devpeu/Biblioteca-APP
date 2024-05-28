import React from 'react'
import { StyleSheet, Text } from "react-native";


export const CustomText = ({ children }) => {
    return (
        <Text style={styles.titleText}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 12
    }
});