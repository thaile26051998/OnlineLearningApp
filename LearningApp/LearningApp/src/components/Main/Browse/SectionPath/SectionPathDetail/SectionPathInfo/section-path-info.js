import React from 'react'
import { View, Text } from 'react-native'
import SectionDetailInfo from '../../../../../Others/Component/SectionDetailInfo/section-detail-info'
import SectionPathInfoHeader from './SectionPathInfoHeader/section-path-info-header'

const SectionPathInfo = (props) => {
    return (
        <View>
            <SectionPathInfoHeader path = {props.path}/>
            <SectionDetailInfo introduce = {props.path.introduce}/>
        </View>
    )
}

export default SectionPathInfo
