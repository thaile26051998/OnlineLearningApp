import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Styles from '../../../../../global/style'
import Strings from '../../../../../global/string'

const SectionRecommendationItem = (props) => {
    const onPressRecommendationItem = () => {
        props.navigation.navigate(Strings.recommendation, {item: props.item})
    }

    return (
        <TouchableOpacity onPress={onPressRecommendationItem} >
            <ImageBackground style={Styles.imageRecommendation} source={{ uri: props.item.uri }}>
                <Text style={Styles.categoriesName}>{props.item.name}</Text>
            </ImageBackground>
        </TouchableOpacity >
    )
}

export default SectionRecommendationItem
