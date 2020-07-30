import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionPath from '../../SectionPath/section-path'
import Styles from '../../../../../global/style'
import SectionAuthors from '../../SectionAuthors/section-authors'
import SectionCourses from '../../../Home/SectionCourses/section-courses'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionSkilsDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionSkillDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
        },
    })

    let item = props.route.params.item;

    return (
        <View style={styles.sectionSkillDetailContainer}>
            <ScrollView >
                <View style={{ marginTop: 30 }}>
                    <SectionPath paths={item.paths[0]} />
                </View>
                <View style={Styles.marginBottomCtn}>
                    <View style={{ marginBottom: 10 }}>
                        <SectionCourses courses={item.courses[0]} />
                    </View>
                    <SectionCourses courses={item.courses[1]} />
                </View>
                <View style={{ marginBottom: 30 }}>
                    <SectionAuthors authors={item.authors[0]} />
                </View>
            </ScrollView>
        </View>
    )
}

export default SectionSkilsDetail


