import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import Logo from "../../Others/SplashScreen/Logo/logo";
import ButtonComponent from "../ButtonComponent/button-component";
import TextComponent from "../TextComponent/text-component";
import Colors from "../../../global/color";
import InputComponent from "../InputComponent/input-component";
import Strings from "../../../global/string";
import Styles from "../../../global/style";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { TouchableHighlight } from "react-native-gesture-handler";
import { ThemeContext } from '../../../provider/theme/theme-provider'
import { LOGIN_SUCCESSED } from "../../../action/authentication-action";
import AsyncStorage from '@react-native-community/async-storage';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const authContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authContext.state.isAuthenticated) {
      console.log(LOGIN_SUCCESSED)
      props.navigation.navigate(Strings.mainTabNavigation)
    } else {
      console.log('Login failed')
    }
  }, [authContext.state.isAuthenticated])

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

  return (
    <View style={Styles.loginContainer}>
      {authContext.state.isAuthenticating &&
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={theme.colorLightBlue} />
        </View>
      }
      {!authContext.state.isAuthenticating &&
        (
          <View style={Styles.loginContainer}>
            <Logo />
            <Text style={Styles.textSignin}>Sign in</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter email"
              placeholderTextColor="#288DBC"
              keyboardType="email-address"
              maxLength={40}
              secureTextEntry={false}
              onChangeText={text => setUsername(text)}
              defaultValue={username}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor="#288DBC"
              keyboardType="password"
              maxLength={40}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              defaultValue={password}
            />
            <TouchableHighlight onPress={() => authContext.login(username, password)}>
              <ButtonComponent title="SIGN IN" />
            </TouchableHighlight>
            <TextComponent content="FORGOT PASSWORD?" destination={Strings.forgotPassword} navigation={props.navigation} />
            <TextComponent content="SIGN UP FREE" destination={Strings.register} navigation={props.navigation} />
          </View>
        )}
    </View>
  );
};

export default Login;

