import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Strings from '../../../../global/string'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../../provider/language/language-provider";

const TabSearch = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const styles = StyleSheet.create({
        allSearchItemContainer: {
            backgroundColor: theme.colorBoldGray,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 138,
            height: 45,
            borderBottomColor: props.allActive == true ? theme.colorLightBlue : null,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        courseSearchItemContainer: {
            backgroundColor: theme.colorBoldGray,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 138,
            height: 45,
            borderBottomColor: props.courseActive == true ? theme.colorLightBlue : null,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        instructorSearchItemContainer: {
            backgroundColor: theme.colorBoldGray,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 138,
            height: 45,
            borderBottomColor: props.instructorActive == true ? theme.colorLightBlue : null,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        nameAll: {
            color: props.allActive == true ? theme.colorLightBlue : theme.colorWhite,
            fontWeight: "bold",
        },
        nameCourse: {
            color: props.courseActive == true ? theme.colorLightBlue : theme.colorWhite,
            fontWeight: "bold",
        },
        nameInstructor: {
            color: props.instructorActive == true ? theme.colorLightBlue : theme.colorWhite,
            fontWeight: "bold",
        },
        tabSearchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })
    return (
        <View style={styles.tabSearchContainer}>
            <TouchableOpacity style={styles.allSearchItemContainer} onPress={() => props.onPressAllTab()}>
                <Text style={styles.nameAll}>{language.ALL}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.courseSearchItemContainer} onPress={() => props.onPressCourseTab()}>
                <Text style={styles.nameCourse}>{language.COURSES}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.instructorSearchItemContainer} onPress={() => props.onPressInstructorTab()}>
                <Text style={styles.nameInstructor}>{language.INSTRUCTORS}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabSearch

const styles = StyleSheet.create({})
