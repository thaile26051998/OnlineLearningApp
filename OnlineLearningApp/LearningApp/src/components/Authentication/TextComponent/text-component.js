import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../global/color'
import { TouchableOpacity } from 'react-native-gesture-handler'


const TextComponent = (props) => {
    const onPressNaviagation = () => {
        props.navigation.navigate(props.destination)
    }

    return (
        <View style={styles.textContainer}>
            <TouchableOpacity onPress = {onPressNaviagation}>
                <Text style={styles.textStyle}>{props.content}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextComponent

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 10,
        marginVertical: 15
    },
    textStyle: {
        fontSize: 15,
        color: Colors.colorLightBlue,
    }
})
