import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Styles from "../../../../global/style";
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../../provider/language/language-provider";

const SectionCoursesHeader = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const styles = StyleSheet.create({
    sectionName: {
      color: theme.colorWhite,
      fontSize: 18,
      marginStart: 10,
      fontWeight: "bold"
    },
    sectionSeeAll: {
      color: theme.colorLightGray,
      fontSize: 14,
      fontWeight: "bold"
    },
  })

  const onPressHeader = () => {
    props.navigation.navigate(props.destination, { itemData: props.itemData })
  }

  return (
    <TouchableOpacity style={Styles.sectionCoursesHeader} onPress={onPressHeader}>
      <Text style={styles.sectionName}>{props.title}</Text>
      <Text style={styles.sectionSeeAll}>{language.seeAll}</Text>
    </TouchableOpacity>
  );
};

export default SectionCoursesHeader;
