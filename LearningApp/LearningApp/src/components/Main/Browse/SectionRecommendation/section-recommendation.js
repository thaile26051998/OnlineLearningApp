import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import SectionRecommendationItem from './SectionRecommendationItem/section-recommendation-item'
import Styles from '../../../../global/style'

const SectionRecommendation = (props) => {
    return (
        <View style={styles.sectionRecommendationContainer}>
            <FlatList
                data={props.recommendations}
                renderItem={({ item }) => <SectionRecommendationItem navigation={props.navigation} item={item} />}
            />
        </View>
    )
}

export default SectionRecommendation



const styles = StyleSheet.create({
    sectionRecommendationContainer: {
        height: 300,
        marginStart: 10,
        marginEnd: 20
      },
    
})
