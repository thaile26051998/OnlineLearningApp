import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import Logo from "../../Others/SplashScreen/Logo/logo";
import ButtonComponent from "../ButtonComponent/button-component";
import TextComponent from "../TextComponent/text-component";
import Colors from "../../../global/color";
import InputComponent from "../InputComponent/input-component";
import Strings from "../../../global/string";
import Styles from "../../../global/style";

const Register = (props) => {
  return (
    <View style={Styles.loginContainer}>
      <Logo />
      <Text style={Styles.textSignin}>Sign up</Text>
      <InputComponent
        placeholder="Enter email"
        type="email-address"
        secureText={false}
      />
      <InputComponent
        placeholder="Enter password"
        type="password"
        secureText={true}
      />
      <InputComponent
        placeholder="Enter password again"
        type="password"
        secureText={true}
      />
      <ButtonComponent title="SIGN UP" destination={Strings.mainTabNavigation} navigation={props.navigation} />
    </View>
  );
};

export default Register;
