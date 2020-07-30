import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import favoriteCourses from '../../../global/data/favorite-data'
import ListCourses from '../../ListCourses/list-courses'
import { ThemeContext } from '../../../provider/theme/theme-provider';

const SectionFavorite = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionFavoriteContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            padding: 10
        }
    })

    return (
        <View style = {styles.sectionFavoriteContainer}>
            <ListCourses courses={favoriteCourses} navigation={props.navigation} />
        </View>
    )
}

export default SectionFavorite


