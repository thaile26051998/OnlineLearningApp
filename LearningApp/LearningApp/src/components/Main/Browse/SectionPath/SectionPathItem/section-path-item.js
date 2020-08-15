import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SectionPathInfo from '../../../../Others/Component/SectionPathInfo/section-path-info'
import SectionPathImage from '../../../../Others/Component/SectionPathImage/section-path-image'
import Styles from '../../../../../global/style'
import Strings from '../../../../../global/string'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionPathItem = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const onPressPathItem = () => {
        props.navigation.navigate(Strings.paths)
    }

    return (
        <TouchableOpacity style={Styles.sectionPathItemContainer} onPress = {onPressPathItem}>
            <SectionPathImage uri={props.item.uri} />
            <SectionPathInfo name={props.item.name} number={props.item.number} />
        </TouchableOpacity>
    )
}

export default SectionPathItem
