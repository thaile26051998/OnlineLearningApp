import React, {useContext} from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import Styles from '../../../../global/style'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionPathImage = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionPathImageContainer: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colorLightBlack,
            height: 100,
            width: 200,
          },
    })

    return (
        <View style = {styles.sectionPathImageContainer}>
            <Image style = {Styles.imagePath} source={{ uri: props.uri }}/>
        </View>
    )
}

export default SectionPathImage


