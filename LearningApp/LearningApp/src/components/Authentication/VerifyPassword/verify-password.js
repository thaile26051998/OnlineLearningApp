import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from 'react-native'
import Logo from '../../Others/SplashScreen/Logo/logo'
import InputComponent from '../InputComponent/input-component'
import Strings from '../../../global/string'
import ButtonComponent from '../ButtonComponent/button-component'
import Styles from '../../../global/style'
import { ThemeContext } from '../../../provider/theme/theme-provider'
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { apiSendMailActivate } from "../../../services/authentication-services";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const VerifyPassword = (props) => {
    const mail = props.route.params.email;
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [email, setEmail] = useState(mail);
    const authContext = useContext(AuthenticationContext);

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

    const sendEmailActivate = () => {
        apiSendMailActivate(email).then((response) => {
            if (response.status === 200) {
                props.navigation.navigate(Strings.logIn)
                console.log(response.data)
                Alert.alert(
                    "",
                    Strings.checkMailRequest,
                    [
                        {
                            text: "Cancel",
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
        })
    }

    return (
        <View style={Styles.loginContainer}>
            <Logo />
            <Text style={Styles.textSignin}>{Strings.verifyPassword}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={props.route.params.email}
                placeholderTextColor="#288DBC"
                keyboardType="email-address"
                maxLength={40}
                editable={false}
                secureTextEntry={false}
                onChangeText={text => setEmail(text)}
                defaultValue={mail}
            />
            <TouchableHighlight onPress={() => sendEmailActivate()}>
                <ButtonComponent title={Strings.plhSendVerifyCode} destination={Strings.logIn} navigation={props.navigation} />
            </TouchableHighlight>
        </View>
    )
}

export default VerifyPassword
