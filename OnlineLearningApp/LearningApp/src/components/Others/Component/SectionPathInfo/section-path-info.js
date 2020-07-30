import React, { useContext } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Styles from '../../../../global/style'
import Strings from '../../../../global/string'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionPathInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionPathInfo: {
            color: theme.colorLightGray,
            marginStart: 10,
            fontSize: 12
        },
        sectionPathName: {
            color: theme.colorWhite,
            fontWeight: "bold",
            marginStart: 10,
        },
        sectionPathInfoContainer: {
            backgroundColor: theme.colorBoldGray,
            height: 70,
            width: 200,
            paddingTop: 10
        },
    })

    return (
        <View style={styles.sectionPathInfoContainer}>
            <Text style={styles.sectionPathName}>{props.name}</Text>
            <Text style={styles.sectionPathInfo}>{`${props.number} ${Strings.courses}`}</Text>
        </View>
    )
}

export default SectionPathInfo


