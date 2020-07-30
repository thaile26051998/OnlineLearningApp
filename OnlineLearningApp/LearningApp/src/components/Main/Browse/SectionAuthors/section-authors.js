import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionAuthorsItem from './SectionAuthorsItem/section-authors-item';
import Styles from '../../../../global/style';
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionAuthors = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const authors = props.authors;

    const styles = StyleSheet.create({
        sectionName: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
        },
    })

    const renderListItem = () => {
        return authors.data.map((item) => <SectionAuthorsItem navigation={props.navigation} item={item} />);
    }

    return (
        <View>
            <View style={styles.sectionCoursesHeader}>
                <Text style={styles.sectionName}>{props.authors.title}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                style={Styles.scrollViewContainer}
            >
                {renderListItem()}
            </ScrollView>
        </View>
    )
}

export default SectionAuthors;



