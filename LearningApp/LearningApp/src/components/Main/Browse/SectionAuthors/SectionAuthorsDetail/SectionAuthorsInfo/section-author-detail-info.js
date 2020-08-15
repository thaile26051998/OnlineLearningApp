import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../../../global/style'
import { ThemeContext } from '../../../../../../provider/theme/theme-provider';
import Strings from '../../../../../../global/string';

const SectionAuthorDetailInfo = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textSmall: {
            fontSize: 16,
            color: theme.colorWhite,
          },
    });
    

    return (
        <View style = {Styles.detailInfoContainer}>
            <Text style = {styles.textSmall}>{props.author.intro != null ? props.author.intro : Strings.introUpdating}</Text>
        </View>
    )
}

export default SectionAuthorDetailInfo

