import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Strings from "../../../global/string";

const ButtonComponent = (props) => {
  const onPressLogin = () => {
    props.navigation.navigate(props.destination)
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressLogin}>
        <View>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 40,
    backgroundColor: "#2E3031",
    borderRadius: 10,
    opacity: 0.9,
    marginVertical: 10
  },
  textStyle: {
    color: "#E5E9EA",
    fontSize: 15
  }
});
