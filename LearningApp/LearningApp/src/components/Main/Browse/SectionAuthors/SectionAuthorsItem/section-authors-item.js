import React, { useContext } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Styles from '../../../../../global/style'
import Constants from '../../../../../global/constant'
import Strings from '../../../../../global/string'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionAuthorsItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionName: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
        },
    })

    const onPressAuthorItem = () => {
        props.navigation.navigate(Strings.authors, {item: props.item})
    }

    return (
        <TouchableOpacity onPress={onPressAuthorItem}>
            <View style={Styles.authorItemContainer} >
                <Image style={Styles.imageAuthor} source={{ uri: props.item['user.avatar'] != null ? props.item['user.avatar'] : props.item.avatar }} />
                <Text numberOfLines={Constants.numberOfLineTwo} style={styles.sectionName}>{props.item['user.name'] != null ? props.item['user.name'] : props.item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SectionAuthorsItem




