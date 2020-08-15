import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionSkillsItem from './SectionSkillsItem/section-skills-item';
import Styles from '../../../../global/style';
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionSkills = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const categories = props.categories;

    const styles = StyleSheet.create({
        sectionName: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
        },
    })

    const renderListItems = () => {
        return categories.map((item) => <SectionSkillsItem item={item} navigation={props.navigation} />)
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.sectionCoursesHeader}>
                <Text style={styles.sectionName}>{props.header}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.scrollViewContainer}>
                {renderListItems()}
            </ScrollView>
        </View>
    )
}

export default SectionSkills

