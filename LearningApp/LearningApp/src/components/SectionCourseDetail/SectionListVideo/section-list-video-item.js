import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Constants from '../../../global/constant';
import Strings from '../../../global/string';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import Colors from '../../../global/color';

const SectionListVideoItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const onPressLesson = () => {
        props.navigation.navigate(Strings.lessonDetail, {item: props.item});
    }

    const styles = StyleSheet.create({
        sectionListVideoItemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginEnd: 10
        },
        videoThumbnail: {
            width: 80,
            height: 50,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10
        },
        headerMenuOptionContainer: {
            padding: 10,
            backgroundColor: theme.colorBackground
        },
        menuOptionContainer: {
            backgroundColor: theme.colorBackground,
        },
        rightVideoContainer: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
        },
        textStyle: {
            color: theme.colorWhite,
            marginEnd: 10,
            fontSize: 14
        },
        textHour: {
            color: theme.colorLightGray,
            marginEnd: 10,
            fontSize: 13
        },
        infoContainer: {
            width: 320,
            flexDirection: 'row',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.sectionListVideoItemContainer} >
            <TouchableHighlight onPress={()=> onPressLesson()}>
                <View style={styles.infoContainer}>
                    <View style={{ marginEnd: 5 }}>
                        <AntDesign name="checkcircle" size={13} color= {Colors.colorGreen} />
                    </View>
                    <Text style={styles.textStyle} numberOfLines={Constants.numberOfLineTwo}>{`${language.lesson} ${props.item.numberOrder}: ${props.item.name}`}</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.rightVideoContainer}>
                <View>
                    <Text style={styles.textHour}>{`${Math.round(props.item.hours * 10) / 10}h`}</Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name="download" size={18} color={theme.colorWhite} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionListVideoItem


