import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '../../Others/SplashScreen/Logo/logo'
import InputComponent from '../InputComponent/input-component'
import Strings from '../../../global/string'
import ButtonComponent from '../ButtonComponent/button-component'
import Styles from '../../../global/style'

const ForgetPassword = (props) => {
    return (
        <View style={Styles.loginContainer}>
            <Logo />
            <Text style={Styles.textSignin}>Forgot password</Text>
            <InputComponent
                placeholder="Enter email"
                type="email-address"
                secureText={false}
            />
            <ButtonComponent title="Send email" destination={Strings.logIn} navigation={props.navigation} />
        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({})
