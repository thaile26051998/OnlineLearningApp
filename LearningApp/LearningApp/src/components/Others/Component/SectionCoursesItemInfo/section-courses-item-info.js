import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../global/style'
import SectionRating from '../SectionRating/section-rating'
import Constants from '../../../../global/constant'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import Strings from '../../../../global/string'

const SectionCoursesItemInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionCoursesName: {
            color: theme.colorWhite,
            fontWeight: "bold",
            marginHorizontal: 10,
        },
        sectionCoursesInfo: {
            color: theme.colorLightGray,
            marginStart: 10,
            fontSize: 12
        },
        sectionCoursesInfo: {
            color: theme.colorLightGray,
            marginStart: 10,
            fontSize: 12
        },
        sectionCoursesInfoContainer: {
            backgroundColor: theme.colorBoldGray,
            paddingVertical: 5
        }
    })

    return (
        <View style={styles.sectionCoursesInfoContainer}>
            <View style={{ height: 35 }}>
                <Text numberOfLines={Constants.numberOfLineTwo} style={styles.sectionCoursesName}>{props.item.title != null ? props.item.title : props.item.courseTitle}</Text>
            </View>
            <Text numberOfLines={Constants.numberOfLineTwo} style={styles.sectionCoursesInfo}>{props.item['instructor.user.name'] != null ? props.item['instructor.user.name'] : props.item.subtitle}</Text>
            <Text numberOfLines={Constants.numberOfLine} style={styles.sectionCoursesInfo}>{`${props.item.coursePrice != null ? props.item.coursePrice  : props.item.price}đ . ${props.item.videoNumber} ${props.item.videoNumber > 1 ? Strings.videos : Strings.video} . ${props.item.totalHours != null ? props.item.totalHours : 0}h`}</Text>
            <SectionRating item = {props.item}/>
        </View>
    )
}

export default SectionCoursesItemInfo;
