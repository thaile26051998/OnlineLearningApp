import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../global/color";
import SectionAvatar from "../../AccountManagement/Profile/SectionAvatar/section-avatar";
import ToggleOption from "./ToggleOption/toggle-option";
import Strings from "../../../global/string";
import ButtonComponent from "../../Authentication/ButtonComponent/button-component";
import { TouchableOpacity, Switch } from "react-native-gesture-handler";
import { ThemeContext } from "../../../provider/theme/theme-provider";
import themes from "../../../provider/theme/theme";
import { LanguageContext } from "../../../provider/language/language-provider";
import languages from "../../../provider/language/language";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const Setting = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const authContext = useContext(AuthenticationContext);

    const onPressLogOut = () => {
        authContext.logout()
        props.navigation.replace(Strings.logIn);
    };

    const onPressLogIn = () => {
        props.navigation.push(Strings.logIn);
    };

    const styles = StyleSheet.create({
        settingContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
        },
        textVersion: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
            marginTop: 10,
            marginBottom: 5
        },
        textSetting: {
            color: theme.colorWhite,
            fontSize: 18,
            marginStart: 10,
            marginVertical: 10,
        },
        textSmallSetting: {
            color: theme.colorLightGray,
            fontSize: 14,
            marginStart: 10,
        },
        signOutContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
        },
        button: {
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            height: 40,
            backgroundColor: theme.colorLightBlue,
            opacity: 0.9,
            margin: 10,
        },
        textStyle: {
            color: theme.colorWhite,
            fontSize: 18,
            fontWeight: "bold",
        },
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
    });

    const [isEnabledTheme, setIsEnabledTheme] = useState(false);
    const [isEnabledLanguage, setIsEnabledLanguage] = useState(false);

    return (
        <View style={styles.settingContainer}>
            <View>
                <View style={styles.toggleOptionContainer}>
                    <Text style={styles.textOption}>{language.language} </Text>
                    <Switch
                        trackColor={{ false: theme.colorLightBlack, true: theme.colorLightBlue }}
                        thumbColor={isEnabledLanguage ? theme.colorLightBlue : theme.colorLightGray}
                        onValueChange={toggleLanguage}
                        value={(language === languages.english) ? true : false}
                    />
                </View>
                <View style={styles.toggleOptionContainer}>
                    <Text style={styles.textOption}>{language.darkTheme} </Text>
                    <Switch
                        trackColor={{ false: theme.colorLightBlack, true: theme.colorLightBlue }}
                        thumbColor={isEnabledTheme ? theme.colorLightBlue : theme.colorLightGray}
                        onValueChange={toggleTheme}
                        value={(theme === themes.dark) ? true : false}
                    />
                </View>
                <View style={styles.signOutContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => onPressLogOut()}>
                        <View>
                            <Text style={styles.textStyle}>{language.SIGNOUT}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Setting;

