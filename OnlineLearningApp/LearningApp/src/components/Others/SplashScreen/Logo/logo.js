import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Logo = () => {
    return (
        <View>
            <Image style={styles.logo}
                source={require("../../../../../assets/splash.png")}>
            </Image>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: ({
        width: 100,
        height: 100,
    })
})
