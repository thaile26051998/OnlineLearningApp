import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import RecentSearchesList from './RecentSearches/recent-searches-list'
import Styles from '../../../global/style'
import SectionSkills from '../Browse/SectionSkills/section-skills'
import skills from '../../../global/data/skill-data'

const Search = (props) => {
    const searches = [
        {
            name: "react native",
        },
        {
            name: "ios",
        },
        {
            name: "android",
        },]

    return (
        <View style={Styles.searchContainer}>
            <ScrollView>
                <RecentSearchesList item={searches} />
                <SectionSkills skills={skills[0]} navigation={props.navigation} />
            </ScrollView>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
