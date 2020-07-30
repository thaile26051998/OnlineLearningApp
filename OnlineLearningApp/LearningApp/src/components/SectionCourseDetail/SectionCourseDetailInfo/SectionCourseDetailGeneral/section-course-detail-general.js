import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SectionAuthors from '../../../Main/Browse/SectionAuthors/section-authors'
import Colors from '../../../../global/color'
import SectionCoursesItemInfo from '../../../Others/Component/SectionCoursesItemInfo/section-courses-item-info'
import SectionRating from '../../../Others/Component/SectionRating/section-rating'
import Constants from '../../../../global/constant'
import SectionCourseDetailWidget from '../SectionCourseDetailWidget/section-course-detail-widget'
import SectionDetailInfo from '../../../Others/Component/SectionDetailInfo/section-detail-info'
import { ThemeContext } from '../../../../provider/theme/theme-provider';


const SectionCourseDetailGeneral = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionCourseDetailGeneralContainer: {
            marginHorizontal: 10
        },
        textCourseName: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 22,
            marginVertical: 10
        },
        generalInfoContainer: {
            flexDirection: 'row'
        },
        sectionCoursesInfo: {
            color: theme.colorLightGray,
            fontSize: 12
        },
    })

    return (
        <View style={styles.sectionCourseDetailGeneralContainer}>
            <Text style={styles.textCourseName}>
                {props.item.title}
            </Text>
            <View style={styles.generalInfoContainer} >
                <Text numberOfLines={Constants.numberOfLine} style={styles.sectionCoursesInfo}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
                <SectionRating />
            </View>
            <SectionCourseDetailWidget />
            <SectionDetailInfo introduce={props.item.introduce} />
        </View>
    )
}

export default SectionCourseDetailGeneral


