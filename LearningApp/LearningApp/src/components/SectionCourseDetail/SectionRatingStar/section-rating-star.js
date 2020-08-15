import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SectionRatingLeft from './section-rating-left'
import SectionRatingRight from './section-rating-right'

const SectionRatingStar = (props) => {
    const styles = StyleSheet.create({
        sectionRatingStarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
            marginBottom: 10,
            height: 150
        }
    })

    return (
        <View style={styles.sectionRatingStarContainer}>
            <SectionRatingLeft item={props.item} />
            <SectionRatingRight item={props.item} stars={props.stars} />
        </View>
    )
}

export default SectionRatingStar


