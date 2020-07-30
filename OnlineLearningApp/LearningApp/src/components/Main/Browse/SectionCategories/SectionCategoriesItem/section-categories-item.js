import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Styles from '../../../../../global/style'
import Strings from '../../../../../global/string'

const SectionCategoriesItem = (props) => {
    const onPressCategoryItem = () => {
        props.navigation.navigate(Strings.category, {item: props.item})
    }

    return (
        <TouchableOpacity onPress = {onPressCategoryItem}>
            <ImageBackground style={Styles.imageCategory} source={{ uri: props.item.uri }}>
                <Text style={Styles.categoriesName}>{props.item.name}</Text>
            </ImageBackground>
        </TouchableOpacity >
    )
}

export default SectionCategoriesItem
