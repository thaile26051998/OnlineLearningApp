import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../global/style'
import Constants from '../../../global/constant'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import SectionRating from '../../Others/Component/SectionRating/section-rating';

const ListCoursesItemInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

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
    })

    return (
        <View style>
            <Text style={styles.sectionCoursesName}>{props.item.title}</Text>
            <Text style={styles.sectionCoursesInfo}>{props.item.author}</Text>
            <Text numberOfLines={Constants.numberOfLine} style={styles.sectionCoursesInfo}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            <SectionRating />
        </View>
    )
}

export default ListCoursesItemInfo;
