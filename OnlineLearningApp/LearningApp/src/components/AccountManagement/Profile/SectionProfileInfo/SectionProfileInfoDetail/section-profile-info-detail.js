import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../../../global/color'
import Styles from '../../../../../global/style'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionProfileInfoDetail = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionProfileInfoDetailContainer: {
            marginVertical: 10
        },
        textTitle: {
            fontSize: 12,
            color: theme.colorLightGray,
        },
        textInfoContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textInfo: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 20,
        },
        textDayStreak: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 20,
        },
        dayStreakContainer: {
            marginStart: 10,
        }
    })

    return (
        <View style={styles.sectionProfileInfoDetailContainer}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <View style={styles.textInfoContainer} >
                <Text style={styles.textInfo}>{props.info}</Text>
                <View style={styles.dayStreakContainer}>
                    <Text style={styles.textTitle}>{props.dayStreak}</Text>
                </View>
            </View>
        </View>
    )
}

export default SectionProfileInfoDetail


