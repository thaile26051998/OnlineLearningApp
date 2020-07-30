import React, {useContext} from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'
import { ListCoursesItem } from './../../../../../ListCourses/ListCoursesItem/list-courses-item'
import Styles from '../../../../../../global/style'
import SectionCourses from '../../../../Home/SectionCourses/section-courses'
import ListCourses from '../../../../../ListCourses/list-courses'
import { ThemeContext } from '../../../../../../provider/theme/theme-provider';

const SectionPathCourses = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
          },
    })

    return (
        <View>
            {/* <SectionList
                sections={props.courses}
                renderItem={({ item }) => <ListCoursesItem item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                <View style={Styles.sectionCoursesHeader}>
                    <Text style={Styles.sectionName}>{title}</Text>
                </View>)}
            /> */}
            <View style={[Styles.sectionCoursesHeader, { marginVertical: 10 }]}>
                <Text style={styles.textMedium}>{props.courses[0].title}</Text>
            </View>
            <ListCourses courses={props.courses[0].data} /> 

            <View style={[Styles.sectionCoursesHeader, { marginVertical: 10 }]}>
                <Text style={styles.textMedium}>{props.courses[1].title}</Text>
            </View>
            <ListCourses courses={props.courses[1].data} />

            <View style={[Styles.sectionCoursesHeader, { marginVertical: 10 }]}>
                <Text style={styles.textMedium}>{props.courses[2].title}</Text>
            </View>
            <ListCourses courses={props.courses[2].data} />
        </View>
    )
}

export default SectionPathCourses;



