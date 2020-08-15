import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import Constants from '../../../global/constant';
import Strings from '../../../global/string';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import Colors from '../../../global/color';
import SectionListVideoHeader from './section-list-video-header';
import SectionListVideoItem from './section-list-video-item';

const SectionVideoItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        sectionVideoItemContainer: {
            backgroundColor: theme.colorBackground,
        }
    })

    

    return (
        <View>
            <SectionListVideoHeader item={props.item} />
            <FlatList
                data={props.item.lesson}
                renderItem={({ item }) => <SectionListVideoItem item={item} navigation={props.navigation} />}
            />
        </View>
    )
}

export default SectionVideoItem

