import React, { useContext } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import SectionRecommendationItem from '../SectionRecommendationItem/section-recommendation-item';
import ListCourses from '../../../../ListCourses/list-courses';
import Styles from '../../../../../global/style';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../../../../global/color';
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionRecommendationDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionRecommendationDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingLeft: 10,
        },

    })

    let recommendations = props.route.params.item;
    let courses = recommendations.courses;

    return (
        <ScrollView style={styles.sectionRecommendationDetailContainer}>
            <View style={{ marginEnd: 10 }}>
                <SectionRecommendationItem item={recommendations} navigation={props.navigation} />
            </View>
            <ListCourses courses={courses} navigation={props.navigation} />
        </ScrollView>
    )
}

export default SectionRecommendationDetail



