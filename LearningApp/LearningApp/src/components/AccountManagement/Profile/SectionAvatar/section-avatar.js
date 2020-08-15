import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import Styles from '../../../../global/style';

const SectionAvatar = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        nameContainer: {
            justifyContent: "center",
            alignItems: "center",
        },
        textLarge: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 10
        },
        imageAvatar: {
            height: 120,
            width: 120,
            borderRadius: 400 / 2,
        },
        sectionAvatarContainer: {
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            justifyContent: "center",
            alignItems: "center",
        },

    })

    return (
        <View style={styles.sectionAvatarContainer}>
            <Image style={styles.imageAvatar} source={{ uri: props.uri }} />
            <View style={styles.nameContainer}>
                <Text style={styles.textLarge}>{props.name}</Text>
            </View>
        </View>
    )
}

export default SectionAvatar


