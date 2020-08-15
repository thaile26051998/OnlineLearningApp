import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';
import { ThemeContext } from '../.././../../provider/theme/theme-provider';
import { FontAwesome } from '@expo/vector-icons';
const ProgressBarComponent = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textStar: {
            fontSize: 15,
            color: Colors.yellow600,
            fontWeight: "bold",
            marginEnd: 3
        },
        textProgress: {
            fontSize: 15,
            color: theme.colorLightGray,
            fontWeight: "bold",
            marginStart: 10
        },
        progressStyle: {
            height: 12,
            borderRadius: 10,
            width: 150,
            marginStart: 3
        },
        progressBarContainer: {
            height: 28,
            flexDirection: 'row',
            alignItems: 'center',
        }
    })

    return (
        <View style={styles.progressBarContainer}>
            <Text style={styles.textStar}>{props.number}</Text>
            <FontAwesome name="star" size={16} color={Colors.yellow600}  />
            <ProgressBar
                progress={props.progress / 100}
                style={styles.progressStyle}
                color={Colors.blue400} />
            <Text style={styles.textProgress}>{`${props.progress != null ? props.progress : 0}%`}</Text>
        </View>
    )
}

export default ProgressBarComponent

