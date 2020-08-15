import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SectionCoursesItemInfo from '../../../../Others/Component/SectionCoursesItemInfo/section-courses-item-info'
import SectionCoursesItemImage from '../../../../Others/Component/SectionCoursesItemImage/section-courses-item-image'
import Styles from '../../../../../global/style'
import Strings from '../../../../../global/string'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionCoursesItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionCoursesItemContainer: {
            margin: 10,
            paddingBottom: 10,
            width: 200,
            opacity: 0.8,
        },
    })

    const onPressCoursesItem = () => {
        props.navigation.navigate(Strings.courseDetail, { item: props.item })
    }

    return (
        <TouchableOpacity style={styles.sectionCoursesItemContainer} onPress={onPressCoursesItem}>
            <SectionCoursesItemImage uri={props.item.imageUrl != null ? props.item.imageUrl : props.item.courseImage} item={props.item} />
            <SectionCoursesItemInfo item={props.item} />
        </TouchableOpacity>
    )
}

export default SectionCoursesItem
