import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import SectionSkills from '../../../SectionSkills/section-skills'
import Styles from '../../../../../../global/style'

const SectionCategoriesImage = (props) => {
    return (
        <View>
            <ImageBackground style={Styles.sectionCategoriesImageContainer} source={{ uri: props.uri }}>
                <View style={Styles.sectionCategoriesTitleDetail}>
                    <Text style={Styles.categoriesTitleDetail}>{props.title}</Text>
                </View>
                <SectionSkills skills={props.skills} navigation={props.navigation}/>
            </ImageBackground>
        </View>
    )
}

export default SectionCategoriesImage
