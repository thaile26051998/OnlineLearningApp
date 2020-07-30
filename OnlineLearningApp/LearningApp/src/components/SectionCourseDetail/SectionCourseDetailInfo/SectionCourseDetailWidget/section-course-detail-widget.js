import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../global/color';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionCourseDetailWidget = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionCourseDetailWidgetContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10
        },
        widgetItemContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        textWidget: {
            color: theme.colorWhite,
            fontSize: 15
        }
    })

    return (
        <View style={styles.sectionCourseDetailWidgetContainer}>
            <View style={styles.widgetItemContainer}>
                <FontAwesome name="bookmark-o" size={24} color={theme.colorWhite} />
                <Text style = {styles.textWidget}>Bookmarked</Text>
            </View>
            <View style={styles.widgetItemContainer}>
                <Entypo name="add-to-list" size={24} color={theme.colorWhite} />
                <Text style = {styles.textWidget}>Add to Chanel</Text>
            </View>
            <View style={styles.widgetItemContainer}>
                <AntDesign name="download" size={24} color={theme.colorWhite} />
                <Text style = {styles.textWidget}>Download</Text>
            </View>
        </View>
    )
}

export default SectionCourseDetailWidget


