import React, { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import Logo from "../../Others/SplashScreen/Logo/logo";
import ButtonComponent from "../ButtonComponent/button-component";
import TextComponent from "../TextComponent/text-component";
import Colors from "../../../global/color";
import InputComponent from "../InputComponent/input-component";
import Strings from "../../../global/string";
import Styles from "../../../global/style";
import { ThemeContext } from '../../../provider/theme/theme-provider'
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { TouchableHighlight } from "react-native-gesture-handler";
import { apiSignUp } from "../../../services/authentication-services";

const Register = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  const onPressSignUp = () => {
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
    } else if (password != rePassword) {
      Alert.alert(
        "",
        Strings.passConfirmPassNotMatch,
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
    } else if (password.length < 8 || password.length > 20) {
      Alert.alert(
        "",
        Strings.lengthPassRequest,
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
      apiSignUp(username, email, phone, password).then((response) => {
        if (response.status === 200) {
          props.navigation.navigate(Strings.verifyPassword, { email: email })
          Alert.alert(
            "",
            Strings.signUpSuccess,
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
          console.log(response.data)
          Alert.alert(
            "",
            response.message,
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
        }
      }).catch((error) => {
        console.log("error")
      })
    }
  }

  return (
    <View style={Styles.loginContainer}>
      <Logo />
      <Text style={Styles.textSignin}>Sign up</Text>
      <TextInput
        style={styles.textInput}
        placeholder={Strings.plhEnterName}
        placeholderTextColor="#288DBC"
        keyboardType="default"
        maxLength={40}
        secureTextEntry={false}
        onChangeText={text => setUsername(text)}
        defaultValue={username}
      />
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
      <TextInput
        style={styles.textInput}
        placeholder={Strings.plhEnterPass}
        placeholderTextColor="#288DBC"
        keyboardType="password"
        maxLength={40}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        defaultValue={password}
      />
      <TextInput
        style={styles.textInput}
        placeholder={Strings.plhEnterPassAgain}
        placeholderTextColor="#288DBC"
        keyboardType="password"
        maxLength={40}
        secureTextEntry={true}
        onChangeText={text => setRePassword(text)}
        defaultValue={rePassword}
      />
      <TextInput
        style={styles.textInput}
        placeholder={Strings.plhEnterPhone}
        placeholderTextColor="#288DBC"
        keyboardType="number-pad"
        maxLength={40}
        onChangeText={text => setPhone(text)}
        defaultValue={phone}
      />
      <TouchableHighlight onPress={() => onPressSignUp()}>
        <ButtonComponent title="SIGN UP" destination={Strings.mainTabNavigation} navigation={props.navigation} />
      </TouchableHighlight>
    </View>
  )
};

export default Register;
