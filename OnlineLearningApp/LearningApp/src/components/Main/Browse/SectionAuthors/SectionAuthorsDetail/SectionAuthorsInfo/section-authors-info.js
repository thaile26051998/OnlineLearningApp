import React from 'react'
import { View, Text } from 'react-native'
import SectionDetailInfo from '../../../../../Others/Component/SectionDetailInfo/section-detail-info'
import SectionAuthorsWidget from './SectionAuthorsWidget/section-authors-widget'
import SectionAuthorsInfoHeader from './SectionAuthorsInfoHeader/section-authors-info-header'

const SectionAuthorsInfo = (props) => {
    return (
        <View>
            <SectionAuthorsInfoHeader author={props.author} />
            <SectionDetailInfo introduce={props.author.introduce} />
            <SectionAuthorsWidget url={props.author.url} />
        </View>
    )
}

export default SectionAuthorsInfo
