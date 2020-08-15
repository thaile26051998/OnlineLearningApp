import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import ListCourses from '../../ListCourses/list-courses';

const SectionListCourse = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const data = props.route.params.itemData;

    const styles = StyleSheet.create({
        sectionListCourseContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            padding: 10
        }
    })

    return (
        <View style={styles.sectionListCourseContainer}>
            <ListCourses itemData={data} navigation={props.navigation} />
        </View>
    )
}

export default SectionListCourse

