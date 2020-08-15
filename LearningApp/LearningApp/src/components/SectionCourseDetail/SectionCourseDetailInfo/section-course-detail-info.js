import React from 'react'
import { View, Text } from 'react-native'
import SectionCourseDetailGeneral from './SectionCourseDetailGeneral/section-course-detail-general'
import SectionCourseDetailWidget from './SectionCourseDetailWidget/section-course-detail-widget'

const SectionCourseDetailInfo = (props) => {
    return (
        <View>
            <SectionCourseDetailGeneral item={props.item} progress={props.progress} navigation={props.navigation} />
        </View>
    )
}

export default SectionCourseDetailInfo
