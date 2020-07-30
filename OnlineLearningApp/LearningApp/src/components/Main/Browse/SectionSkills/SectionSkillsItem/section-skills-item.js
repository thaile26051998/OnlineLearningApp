import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Strings from '../../../../../global/string'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionSkillsItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionSkillItemContainer: {
            borderRadius: 30,
            backgroundColor: theme.colorBoldGray,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5
        },
        name: {
            color: theme.colorWhite,
            fontWeight: "bold",
        },
    })

    const onPressSkillItem = () => {
        props.navigation.navigate(Strings.skills, { item: props.item })
    }

    return (
        <TouchableOpacity style={styles.sectionSkillItemContainer} onPress={onPressSkillItem}>
            <Text style={styles.name}>{props.item.name}</Text>
        </TouchableOpacity>
    )
}

export default SectionSkillsItem


