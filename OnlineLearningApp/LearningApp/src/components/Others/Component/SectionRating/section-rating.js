import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../../../../global/style";
import Colors from "../../../../global/color";

const SectionRating = () => {
  return (
    <View style={Styles.sectionRating}>
      <Ionicons name="md-star" size={20} color={Colors.colorSunFlower} />
      <Ionicons name="md-star" size={20} color={Colors.colorSunFlower} />
      <Ionicons name="md-star" size={20} color={Colors.colorSunFlower} />
      <Ionicons name="md-star" size={20} color={Colors.colorSunFlower} />
      <Ionicons name="md-star" size={20} color={Colors.colorSunFlower} />
    </View>
  );
};

export default SectionRating;
