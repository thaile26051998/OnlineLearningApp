import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../../../../../../../global/style'

const PathInfoGeneral = (props) => {
    return (
        <View>
            <Text style={Styles.textLarge} >{props.path.name}</Text>
            <Text style={Styles.textMedium}>{`${props.path.number} courses  .  ${props.path.hour} hours` }</Text>
        </View>
    )
}

export default PathInfoGeneral
