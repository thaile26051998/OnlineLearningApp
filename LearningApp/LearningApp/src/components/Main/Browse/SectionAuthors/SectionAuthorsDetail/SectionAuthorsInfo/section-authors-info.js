import React from 'react'
import { View, Text } from 'react-native'
import SectionDetailInfo from '../../../../../Others/Component/SectionDetailInfo/section-detail-info'
import SectionAuthorsWidget from './SectionAuthorsWidget/section-authors-widget'
import SectionAuthorsInfoHeader from './SectionAuthorsInfoHeader/section-authors-info-header'
import SectionAuthorDetailInfo from './section-author-detail-info'

const SectionAuthorsInfo = (props) => {
    return (
        <View>
            <SectionAuthorsInfoHeader author={props.author} />
            <SectionAuthorDetailInfo author={props.author} />
        </View>
    )
}

export default SectionAuthorsInfo
