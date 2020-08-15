import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";

const SectionCourseHomeworkItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const onPressLesson = () => {
        props.navigation.navigate(Strings.lessonDetail, { item: props.item });
    }

    const styles = StyleSheet.create({
        sectionCourseHomeworkItemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            marginHorizontal: 10
        },
        textStyle: {
            fontSize: 16,
            color: theme.colorWhite
        }
    })

    return (
        <View style={styles.sectionCourseHomeworkItemContainer} >
            <Text style={styles.textStyle}>{`${props.item.title}`}</Text>
            <Text style={styles.textStyle}>{`${props.item.numberQuestion} ${language.question} `}</Text>
        </View>
    )
}

export default SectionCourseHomeworkItem


