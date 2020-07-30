import React, {useContext} from "react";
import { StyleSheet, Text, View, TextInput} from "react-native";
import Colors from "../../../global/color";
import { ThemeContext } from '../../../provider/theme/theme-provider';

const InputComponent = (props) => {
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

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor="#288DBC"
        keyboardType={props.type}
        maxLength={40}
        secureTextEntry={props.secureText}
      />
    </View>
  );
};

export default InputComponent;


