import React, {useContext} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import Styles from '../../../../global/style';

const SectionAvatar = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        nameContainer: {
            flex: 1,
            justifyContent: "center",
            marginStart: 20,
        },
        textLarge: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 10
          },
    })

    return (
        <View style={Styles.sectionAvatarContainer}>
            <Image style={Styles.imageAuthor} source={{ uri: props.uri }} />
            <View style={styles.nameContainer}>
                <Text style={styles.textLarge}>{props.name}</Text>
            </View>
        </View>
    )
}

export default SectionAvatar


