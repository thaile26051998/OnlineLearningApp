import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../../../../global/style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../../../../../global/color';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from '../../../../../../../provider/theme/theme-provider';

const SectionAuthorsWidget = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
        },
    })
    return (
        <View>
            <View style={Styles.authorWidgetSocialContainer}>
                <MaterialCommunityIcons style={Styles.marginEndSmall} name="web" size={24} color={theme.colorWhite} />
                <Text style={styles.textMedium}>{props.url}</Text>
            </View>
            <View style={Styles.authorWidgetSocialContainer}>
                <AntDesign style={Styles.marginEndMedium} name="twitter" size={24} color={theme.colorWhite} />
                <AntDesign style={Styles.marginEndMedium} name="facebook-square" size={24} color={theme.colorWhite} />
                <AntDesign style={Styles.marginEndMedium} name="linkedin-square" size={24} color={theme.colorWhite} />
            </View>
        </View>
    )
}

export default SectionAuthorsWidget
