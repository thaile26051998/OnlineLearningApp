import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SectionAuthorsItem from '../../../SectionAuthorsItem/section-authors-item'
import Styles from '../../../../../../../global/style'
import Strings from '../../../../../../../global/string'
import { ThemeContext } from '../../../../../../../provider/theme/theme-provider';

const SectionAuthorsInfoHeader = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

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
            <Text style={[styles.textMedium, { marginTop: 5 }]}>{props.author.role}</Text>
            <TouchableOpacity style={{ width: "100%", marginTop: 5 }}>
                <View style={styles.buttonFollowContainer}>
                    <Text style={styles.textMedium}>{Strings.follow}</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.textSuperSmall, { marginTop: 20 }]}>{Strings.followRecommendation}</Text>
        </View>
    )
}

export default SectionAuthorsInfoHeader;
