import React from 'react'
import { View, Text } from 'react-native'
import Strings from '../../../../../global/string'
import Styles from '../../../../../global/style'

const RecentSearchesHeader = (props) => {
    return (
        <View style = {Styles.recentSearchesHeader}>
            <Text style = {Styles.textMedium}>{Strings.recentSearches}</Text>
            <Text style = {Styles.textClearAll}>{Strings.clearAll}</Text>
        </View>
    )
}

export default RecentSearchesHeader
