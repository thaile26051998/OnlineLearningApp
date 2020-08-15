import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';
import SectionCoursesItemInfo from '../../../Others/Component/SectionCoursesItemInfo/section-courses-item-info'
import SectionRating from '../../../Others/Component/SectionRating/section-rating'
import Constants from '../../../../global/constant'
import SectionCourseDetailWidget from '../SectionCourseDetailWidget/section-course-detail-widget'
import SectionDetailInfo from '../../../Others/Component/SectionDetailInfo/section-detail-info'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../../provider/language/language-provider";
import Strings from '../../../../global/string'

const SectionCourseDetailGeneral = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const [title, setTitle] = useState("");

    let ratingList = [];
    // ratingList = props.item.ratings.ratingList;

    const styles = StyleSheet.create({
        sectionCourseDetailGeneralContainer: {
            marginHorizontal: 10
        },
        textCourseName: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 10
        },
        generalInfoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        sectionCoursesInfo: {
            color: theme.colorLightGray,
            fontSize: 14
        },
        textSubTitle: {
            fontSize: 17,
            color: theme.colorLightGray,
            fontWeight: "bold",
            marginBottom: 10
        },
        textProgress: {
            fontSize: 17,
            color: theme.colorLightGray,
            fontWeight: "bold",
            marginStart: 10
        },
        progressStyle: {
            height: 10,
            width: 200,
            borderRadius: 10
        },
        progressBarContainer: {
            width: 200,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
        }
    })

    return (
        <View style={styles.sectionCourseDetailGeneralContainer}>
            <Text style={styles.textCourseName}>
                {props.item.title != null ? props.item.title : props.item.name}
            </Text>
            <Text style={styles.textSubTitle}>{props.item.subtitle}</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar
                    progress={props.progress / 100}
                    style={styles.progressStyle}
                    color={Colors.blue400} />
                <Text style={styles.textProgress}>{`${props.progress != null ? props.progress : 0}%`}</Text>
            </View>
            <View style={styles.generalInfoContainer} >
                <Text numberOfLines={Constants.numberOfLine} style={styles.sectionCoursesInfo}>{`${props.item.price}đ  .  ${props.item.videoNumber} ${props.item.videoNumber > 1 ? language.videos : language.video}  .  ${props.item.totalHours}h`}</Text>
                <SectionRating item={props.item} />
                <Text style={styles.sectionCoursesInfo}>{` (${props.item.ratedNumber})`}</Text>
            </View>
            <SectionCourseDetailWidget item={props.item} navigation={props.navigation} />
            <SectionDetailInfo item={props.item} />
        </View>
    )
}

export default SectionCourseDetailGeneral


