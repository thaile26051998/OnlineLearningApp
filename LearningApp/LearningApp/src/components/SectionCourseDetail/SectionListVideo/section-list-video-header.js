import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Constants from '../../../global/constant';
import Strings from '../../../global/string';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import Colors from '../../../global/color';
import { colors } from 'react-native-elements';

const SectionListVideoHeader = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    onPressVideo = () => {
        props.navigation.navigate(Strings.courseDetail);
    }

    const styles = StyleSheet.create({
        sectionListVideoHeaderContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10
        },
        videoThumbnail: {
            width: 80,
            height: 50,
            backgroundColor: theme.colorBoldGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10,
            borderBottomColor: Colors.colorGreen,
            borderBottomWidth: 4
        },
        textStyle: {
            color: theme.colorWhite,
            fontSize: 16,
            fontWeight: 'bold'
        },
        textHour: {
            color: theme.colorLightGray,
            fontSize: 14
        },
        textNumber:{
            color: theme.colorWhite
        },
        infoContainer: {
            width: 320,
            marginEnd: 5
        }
    })

    return (
            <View style={styles.sectionListVideoHeaderContainer}>
                <ImageBackground style={styles.videoThumbnail}>
                    <Text style={styles.textNumber}>{props.item.numberOrder}</Text>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    <Text style={styles.textStyle} numberOfLines={Constants.numberOfLineTwo}>{`${props.item.name}`}</Text>
                    <Text style={styles.textHour}>{`${Math.round(props.item.sumHours * 10) / 10}h`}</Text>
                </View>
            </View>
    )
}

export default SectionListVideoHeader


