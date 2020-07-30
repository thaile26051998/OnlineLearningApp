import React, {useContext} from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Styles from "../../../../global/style";
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionCoursesHeader = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    sectionName: {
      color: theme.colorWhite,
      fontSize: 18,
      marginStart: 10,
    },
    sectionSeeAll: {
      color: theme.colorLightGray,
      fontSize: 14,
    },
  })


  return (
    <TouchableOpacity style={Styles.sectionCoursesHeader}>
      <Text style={styles.sectionName}>{props.title}</Text>
      <Text style={styles.sectionSeeAll}>See all ></Text>
    </TouchableOpacity>
  );
};

export default SectionCoursesHeader;
