import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native'
import Logo from '../../Others/SplashScreen/Logo/logo'
import InputComponent from '../InputComponent/input-component'
import Strings from '../../../global/string'
import ButtonComponent from '../ButtonComponent/button-component'
import Styles from '../../../global/style'
import { ThemeContext } from '../../../provider/theme/theme-provider'
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { apiSendMailForgotPass } from "../../../services/authentication-services";
import BasicDialog from "../../Others/Component/BasicDialog/basic-dialog";
import Dialog, { DialogFooter, DialogButton, SlideAnimation, DialogContent } from 'react-native-popup-dialog';

const ForgetPassword = (props) => {
    const [email, setEmail] = useState('');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textInput: {
            fontSize: 15,
            width: 350,
            height: 50,
            color: "#E5E9EA",
            marginBottom: 10,
            paddingStart: 20,
            backgroundColor: theme.colorInputBackground,
            borderRadius: 10,
            opacity: 0.9,
        },
    });

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const sendEmailForgotPass = () => {
        if (!ValidateEmail(email)) {
            Alert.alert(
                "",
                Strings.notEmailFormat,
                [
                    {
                        text: Strings.CANCEL,
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: Strings.OK,
                        onPress: () => {
                            console.log("OK Pressed")
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            apiSendMailForgotPass(email).then((response) => {
                if (response.status === 200) {
                    props.navigation.replace(Strings.logIn)
                    console.log(response.data)
                    Alert.alert(
                        "",
                        Strings.checkMailRequest,
                        [
                            {
                                text: Strings.OK,
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                        ],
                        { cancelable: false }
                    );
                } else {
                    console.log(response.data)

                }
            }).catch((error) => {
                console.log("error")
                Alert.alert(
                    "",
                    Strings.emailInvalid,
                    [
                        {
                            text: Strings.OK,
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                    ],
                    { cancelable: false }
                );
            })
        }
    }

    return (
        <View style={Styles.loginContainer}>
            <Logo />
            <Text style={Styles.textSignin}>{Strings.forgotPassword}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={Strings.plhEnterEmail}
                placeholderTextColor="#288DBC"
                keyboardType="email-address"
                maxLength={40}
                secureTextEntry={false}
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            <TouchableHighlight onPress={() => sendEmailForgotPass()}>
                <ButtonComponent title={Strings.plhSendNewPass} destination={Strings.logIn} navigation={props.navigation} />
            </TouchableHighlight>
        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({})
