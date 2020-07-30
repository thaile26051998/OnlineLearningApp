import React, {useContext} from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Constants from '../../../global/constant';
import Strings from '../../../global/string';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import Colors from '../../../global/color';

const SectionListVideoItem = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    onPressVideo = () => {
        props.navigation.navigate(Strings.courseDetail);
    }

    const styles = StyleSheet.create({
        sectionListVideoItemContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10
        },
        videoThumbnail: {
            width: 80,
            height: 50,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10
        },
        videoThumbnailInfoContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        headerMenuOptionContainer: {
            padding: 10,
            backgroundColor: theme.colorBackground
        },
        menuOptionContainer: {
            backgroundColor: theme.colorBackground,
        },
        menuContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        textOption: {
            fontSize: 16,
            color: theme.colorWhite
        },
        textNumber: {
            fontSize: 16,
            color: Colors.colorWhite
        }
    })

    return (
        <View style={styles.sectionListVideoItemContainer} >
            <TouchableHighlight onPress={onPressVideo()}>
                <View style={{ flexDirection: 'row', marginEnd: 10 }}>
                    <ImageBackground style={styles.videoThumbnail}>
                        <Text style={styles.textNumber}>{props.item.id}</Text>
                    </ImageBackground>
                    <View style={styles.videoThumbnailInfoContainer}>
                        <Text style={{ color: theme.colorWhite, width: 250 }} numberOfLines={Constants.numberOfLineTwo}>{props.item.title}</Text>
                        <Text style={{ color: theme.colorLightGray }}>{props.item.duaration}</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <View style={styles.menuContainer}>
                <TouchableOpacity>
                    <Menu >
                        <MenuTrigger>
                            <Entypo name="dots-three-vertical" size={20} color={theme.colorWhite} />
                        </MenuTrigger>
                        <MenuOptions style={styles.menuOptionContainer}>
                            <MenuOption onSelect={() => alert('')} >
                                <View style={styles.headerMenuOptionContainer}>
                                    <Text style={styles.textOption}>Bookmark</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => alert('')} >
                                <View style={styles.headerMenuOptionContainer}>
                                    <Text style={styles.textOption} >Download</Text>
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionListVideoItem


