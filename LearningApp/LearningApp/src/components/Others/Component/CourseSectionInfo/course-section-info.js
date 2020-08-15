import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const CourseSectionInfo = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionProfileInfoDetailContainer: {
            marginVertical: 10
        },
        textTitle: {
            fontSize: 20,
            color: theme.colorLightGray,
            fontWeight: "bold",
        },
        textInfoContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textInfo: {
            color: theme.colorWhite,
            fontSize: 16,
        },
    })

    return (
        <View style={styles.sectionProfileInfoDetailContainer}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <View style={styles.textInfoContainer} >
                <Text style={styles.textInfo}>{props.info}</Text>
            </View>
        </View>
    )
}

export default CourseSectionInfo
