import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RecentSearchesItem from './RecentSearchesItem/recent-searches-item'
import RecentSearchesHeader from './RecentSearchesHeader/recent-searches-header'
import Styles from '../../../../global/style'

const RecentSearchesList = (props) => {
    return (
        <View>
            <RecentSearchesHeader />
            <FlatList
                style = {Styles.recentSearchListContainer}
                data={props.item}
                renderItem={({item}) => <RecentSearchesItem item={item} />}
            />
        </View>
    )
}

export default RecentSearchesList
