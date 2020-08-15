import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../../../global/style';
import Colors from '../../../../../global/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const RecentSearchesItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        recentSearchesItemContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
            marginStart: 5,
            width: 350
        },
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 5,
            marginStart: 5,
            marginEnd: 10
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.recentSearchesItemContainer} onPress={() => props.getRecentKeywordValue(props.item.content)}>
                <MaterialCommunityIcons name="progress-download" size={28} color={Colors.colorWhite} style={{ marginEnd: 10 }} />
                <Text style={Styles.textMedium}>{props.item.content}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.removeRecentKey(props.item.id)}>
                <FontAwesome name="remove" size={24} color={theme.colorLightGray} />
            </TouchableOpacity>
        </View>


    )
}

export default RecentSearchesItem


