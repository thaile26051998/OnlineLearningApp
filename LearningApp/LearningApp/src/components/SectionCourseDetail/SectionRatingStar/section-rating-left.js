import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Strings from '../../../global/string'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";

const SectionRatingLeft = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const styles = StyleSheet.create({
        sectionRatingLeftContainer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            marginEnd: 20
        },
        textLarge: {
            fontSize: 30,
            color: theme.colorWhite,
            fontWeight: "bold",
        },
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
            fontWeight: "bold",
        },
        textSmall: {
            fontSize: 14,
            color: theme.colorWhite,
        }
    })

    return (
        <View style={styles.sectionRatingLeftContainer}>
            <Text style={styles.textLarge}>{props.item.averagePoint > 0 ? Math.round(props.item.averagePoint * 10) / 10 : 0}</Text>
            <Text style={styles.textMedium}>{`(${props.item.ratedNumber} ${language.rating})`}</Text>
            <Text style={styles.textSmall}>{`${Math.round(props.item.formalityPoint * 10) / 10} ${language.formalityPoint}`}</Text>
            <Text style={styles.textSmall}>{`${Math.round(props.item.contentPoint * 10) / 10} ${language.contentPoint}`}</Text>
            <Text style={styles.textSmall}>{`${Math.round(props.item.presentationPoint * 10) / 10} ${language.presentationPoint}`}</Text>
        </View>
    )
}

export default SectionRatingLeft

