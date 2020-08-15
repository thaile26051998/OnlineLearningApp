import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from '../../../global/constant'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import SectionRating from '../../Others/Component/SectionRating/section-rating';
import Strings from '../../../global/string';

const ListCoursesItemInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const styles = StyleSheet.create({
        sectionCoursesName: {
            color: theme.colorWhite,
            fontWeight: "bold",
            marginStart: 10,
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
            marginEnd: 10
        }
    })

    return (
        <View style={styles.sectionCoursesInfoContainer}>
            <Text numberOfLines={Constants.numberOfLineTwo} style={styles.sectionCoursesName}>{props.item.courseTitle != null ? props.item.courseTitle : props.item.title}</Text>
            <Text style={styles.sectionCoursesInfo}>{props.item.instructorName}</Text>
            <Text numberOfLines={Constants.numberOfLine} style={styles.sectionCoursesInfo}>{`${props.item.coursePrice != null ? props.item.coursePrice  : props.item.price}đ . ${props.item.videoNumber != null ? props.item.videoNumber : props.item.courseSoldNumber} ${props.item.videoNumber != null ? Strings.video : language.student} . ${props.item.totalHours != null ? props.item.totalHours : 0}h`}</Text>
            <SectionRating item = {props.item}/>
        </View>
    )
}

export default ListCoursesItemInfo;
