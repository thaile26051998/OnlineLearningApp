import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../global/style'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionDetailInfo = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textSmall: {
            fontSize: 16,
            color: theme.colorWhite,
          },
    });
    

    return (
        <View style = {Styles.detailInfoContainer}>
            <Text style = {styles.textSmall}>{props.introduce}</Text>
        </View>
    )
}

export default SectionDetailInfo

