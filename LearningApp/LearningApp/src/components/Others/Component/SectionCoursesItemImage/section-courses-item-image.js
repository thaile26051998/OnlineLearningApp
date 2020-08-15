import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Share, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import Styles from "../../../../global/style";
import Colors from "../../../../global/color";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { apiLikeCourse } from "../../../../services/user-services";

const SectionCoursesItemImage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const authContext = useContext(AuthenticationContext);

  const token = authContext.state.token;

  const courseId = props.item.id;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = {
    courseId
  };

  const onLikeCourse = () => {
    apiLikeCourse(data, config).then((response) => {
      if (response.status === 200) {
        console("like course successed")
        alert('Liked successfully')
      } else {
        console("like course failed")
      }
    }).catch((error) => {
      console("like course failed")
    })
  }

  const styles = StyleSheet.create({
    menuContainer: {
      backgroundColor: theme.colorBackground,
    },
    headerMenuOptionContainer: {
      padding: 10,
      backgroundColor: theme.colorBackground
    },
    textOption: {
      fontSize: 16,
      color: theme.colorWhite
    }
  })

  return (
    <ImageBackground style={Styles.sectionCoursesItemImage} source={{ uri: props.uri }}>
    </ImageBackground>
  );
};

export default SectionCoursesItemImage;


