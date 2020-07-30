import React, { useContext } from "react";
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
import themes from "../../../../provider/theme/theme";


const SectionCoursesItemImage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Awesome course',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
      <TouchableOpacity >
        <View style={Styles.sectionCourseOption}>
          <TouchableOpacity>
            <Menu >
              <MenuTrigger>
                <Entypo name="dots-three-vertical" size={20} color={theme.colorWhite} />
              </MenuTrigger>
              <MenuOptions style={styles.menuContainer}>
                <MenuOption onSelect={() => alert('Bookmark successfully')} >
                  <View style={styles.headerMenuOptionContainer}>
                    <Text style={styles.textOption}>Bookmark</Text>
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => alert('Add to chanel successfully')} >
                  <View style={styles.headerMenuOptionContainer}>
                    <Text style={styles.textOption} >Add to chanel</Text>
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => alert('Download successfully')} >
                  <View style={styles.headerMenuOptionContainer}>
                    <Text style={styles.textOption} >Download</Text>
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => { onShare() }} >
                  <View style={styles.headerMenuOptionContainer}>
                    <Text style={styles.textOption} >Share</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SectionCoursesItemImage;


