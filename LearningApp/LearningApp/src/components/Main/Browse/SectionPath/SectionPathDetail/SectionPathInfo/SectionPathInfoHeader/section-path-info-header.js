import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from '../../../../../../../global/style'
import PathInfoGeneral from './PathInfoGeneral/path-info-general'

const SectionPathInfoHeader = (props) => {
    return (
        <View style={Styles.sectionPathInfoHeaderContainer}>
            <View style ={{paddingHorizontal: 20}}>
                <Image style = {Styles.imagePathInfo} source={{ uri: props.path.uri }} />
            </View>
            <View style ={{marginBottom: 10}}>
                <PathInfoGeneral path={props.path} />
            </View>
        </View>
    )
}

export default SectionPathInfoHeader
