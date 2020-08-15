import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-paper';
import Colors from '../../../../global/color';
import themes from '../../../../provider/theme/theme';
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const ToggleOption = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        toggleOptionContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        textOption: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
            marginVertical: 10,
        }
    })

    return (
        <View style={styles.toggleOptionContainer}>
            <Text style ={styles.textOption}>{props.content}</Text>
            <Switch
                trackColor={{ false: Colors.colorLightBlack, true: Colors.colorLightBlue }}
                thumbColor={isEnabled ? Colors.colorLightBlue : Colors.colorLightGray}
                onValueChange={toggleTheme}
                value={(theme === themes.dark && props.isChangeTheme === true)? true : false}
            />
        </View>
    )
}

export default ToggleOption


