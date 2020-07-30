import React, {useContext} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionCategoriesImage from './SectionCategoriesImage/section-categories-image'
import SectionPath from '../../SectionPath/section-path'
import Styles from '../../../../../global/style'
import SectionAuthors from '../../SectionAuthors/section-authors'
import SectionCourses from '../../../Home/SectionCourses/section-courses'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionCategoriesDetail = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionCategoriesDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
          },
    })


    let item = props.route.params.item;

    return (
        <View style={styles.sectionCategoriesDetailContainer}>
            <ScrollView>
                <SectionCategoriesImage skills={item.skills[0]} title={item.name} uri={item.uri} navigation={props.navigation} />
                <SectionPath paths={item.paths[0]} navigation={props.navigation} />
                <View style={Styles.marginBottomCtn}>
                    <SectionCourses courses={item.courses[0]} navigation={props.navigation} />
                    <SectionCourses courses={item.courses[1]} navigation={props.navigation} />
                </View>
                <SectionAuthors authors={item.authors[0]} navigation={props.navigation} />
            </ScrollView>
        </View>
    )
}

export default SectionCategoriesDetail




