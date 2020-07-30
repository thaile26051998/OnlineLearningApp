import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Colors from '../../../global/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputComponent from '../../../components/Authentication/InputComponent/input-component'
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../../provider/theme/theme-provider';

const SendFeedback = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sendFeedbackContainer: {
            backgroundColor: theme.colorBackground,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        menuContainer: {
            width: 500,
            marginHorizontal: 20,
            backgroundColor: theme.colorBackground,
        },
    
        menuOptionContainer: {
            width: 500,
            backgroundColor: theme.colorBackground,
            padding: 10,
        },
        feedbackMenuOptionContainer: {
            width: 500,
            backgroundColor: theme.colorBackground,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 10,
        },
        textOption: {
            backgroundColor: theme.colorBackground,
            fontSize: 18,
            color: theme.colorWhite,
        }
    })

    return (
        <View style={styles.sendFeedbackContainer}>
            {/* <Menu style={styles.menuContainer}>
                <MenuTrigger>
                    <View style={styles.feedbackMenuOptionContainer}>
                        <Text style={styles.textOption}>General Feedback</Text>
                        <TouchableOpacity>
                            <View>
                                <Ionicons name="md-arrow-dropdown" size={22} color={Colors.colorWhite} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </MenuTrigger>
                <MenuOptions style = {styles.menuContainer}>
                    <MenuOption onSelect={() => { }}  style={styles.menuOptionContainer}>
                        <View>
                            <Text style={styles.textOption}>General Feedback</Text>
                        </View>
                    </MenuOption>
                    <MenuOption onSelect={() => { }} >
                        <View style={styles.menuOptionContainer}>
                            <Text style={styles.textOption} >Bug</Text>
                        </View>
                    </MenuOption>
                </MenuOptions>
            </Menu> */}
            <InputComponent
                placeholder="Your feedback"
                type="text"
            />
        </View>
    )
}

export default SendFeedback


