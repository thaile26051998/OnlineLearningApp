import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../../../global/style';
import Colors from '../../../../../global/color';

const RecentSearchesItem = (props) => {
    return (
        <View style = {Styles.recentSearchesItemContainer}>
            <MaterialCommunityIcons name="progress-download" size={28} color= {Colors.colorWhite}  style = {{marginEnd: 10}}/>
            <Text style = {Styles.textMedium}>{props.item.name}</Text>
        </View>
    )
}

export default RecentSearchesItem
