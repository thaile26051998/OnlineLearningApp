import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SectionAuthorsItem from '../../../SectionAuthorsItem/section-authors-item'
import Styles from '../../../../../../../global/style'
import Strings from '../../../../../../../global/string'
import { ThemeContext } from '../../../../../../../provider/theme/theme-provider';
import skills from '../../../../../../../global/data/skill-data'

const SectionAuthorsInfoHeader = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    let skill = "";
    let skillArr = [];
    skillArr = props.author.skills;
    let i = 0;

    for (i in skillArr) {
        skill += skillArr[i]
        if (i < skillArr.length - 1) {
            skill += ", "
        } else {
            skill += ""
        }
    }

    const styles = StyleSheet.create({
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
        },
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
        },
        textSuperSmall: {
            fontSize: 12,
            color: theme.colorLightGray,
            fontWeight: "normal"
        },
        buttonFollowContainer: {
            borderRadius: 5,
            backgroundColor: theme.colorLightBlue,
            paddingVertical: 10,
            paddingHorizontal: 2,
            justifyContent: "center",
            alignItems: "center"
        },
    })

    return (
        <View style={Styles.sectionAuthorHeaderContainer}>
            <SectionAuthorsItem item={props.author} />
            <Text style={[styles.textMedium, { marginTop: 5 }]}>{props.author.major != null ? props.author.major : Strings.majorUpdating}</Text>
            <Text style={[styles.textMedium, { marginTop: 5 }]}>{`${props.author.soldNumber} student . ${props.author.totalCourse} course`}</Text>
            <Text style={[styles.textMedium, { marginTop: 5 }]}>{`Skills: ${skill}`}</Text>
        </View>
    )
}

export default SectionAuthorsInfoHeader;
