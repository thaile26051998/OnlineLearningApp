import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../../../global/color'
import Styles from '../../../../../global/style'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';
import { TextInput } from 'react-native-gesture-handler';

const SectionProfileInfoDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [text, setText] = useState(props.info);

    const styles = StyleSheet.create({
        sectionProfileInfoDetailContainer: {
            marginVertical: 10
        },
        textTitle: {
            fontSize: 12,
            color: theme.colorLightGray,
        },
        textInput: {
            marginTop: 5,
            fontSize: 15,
            width: 350,
            height: 50,
            color: theme.colorWhite,
            paddingStart: 20,
            backgroundColor: theme.colorInputBackground,
            borderRadius: 10,
            opacity: 0.9,
        },
    })

    return (
        <View style={styles.sectionProfileInfoDetailContainer}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={props.pld}
                placeholderTextColor={theme.colorWhite}
                keyboardType= {props.type}
                maxLength={40}
                editable = {props.editable}
                secureTextEntry={false}
                onChangeText={text => {
                    setText(text)
                    props.changeName == true ? props.onChangeName(text) : props.onChangePhone(text)
                }}
                defaultValue={props.info}
            />
        </View>
    )
}

export default SectionProfileInfoDetail


