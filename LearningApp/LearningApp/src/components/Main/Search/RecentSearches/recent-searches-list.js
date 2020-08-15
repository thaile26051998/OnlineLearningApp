import React, { useEffect, useState, useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import RecentSearchesItem from './RecentSearchesItem/recent-searches-item'
import RecentSearchesHeader from './RecentSearchesHeader/recent-searches-header'
import Styles from '../../../../global/style'
import Strings from '../../../../global/string'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LanguageContext } from "../../../../provider/language/language-provider";

const RecentSearchesList = (props) => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <View>
            <View style={Styles.recentSearchesHeader}>
                <Text style={Styles.textMedium}>{language.recentSearches}</Text>
            </View>
            <FlatList
                style={Styles.recentSearchListContainer}
                data={props.recentArr}
                renderItem={({ item }) => <RecentSearchesItem item={item}
                    getRecentKeywordValue={props.getRecentKeywordValue}
                    removeRecentKey={props.removeRecentKey} />}
            />
        </View>
    )
}

export default RecentSearchesList
