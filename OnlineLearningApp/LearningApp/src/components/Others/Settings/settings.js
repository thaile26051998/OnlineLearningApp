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

const Setting = (props) => {
    const profiles = [
        {
            name: "Le Quoc Thai",
            avtUri:
                "data:image/jpeg;base64,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",
            skills: [
                {
                    title: "Interests",
                    data: [
                        {
                            name: "JavaScript",
                            choose: true,
                        },
                        {
                            name: "React",
                            choose: true,
                        },
                        {
                            name: "Android",
                            choose: true,
                        },
                    ],
                },
            ],
            insights: "30",
            activeDay: "3",
            dayStreak: "1",
            mostActiveTime: "3:00 AM",
            mostViewedSub: "Angular",
        },
    ];

    const { theme, toggleTheme } = useContext(ThemeContext);

    const onPressSignOut = () => {
        props.navigation.navigate(Strings.logIn);
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
            margin: 10,
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
    const [isEnabledDownload, setIsEnabledDownload] = useState(false);
    const toggleSwitchDownload = () => setIsEnabledDownload(!isEnabledDownload);

    return (
        <View style={styles.settingContainer}>
            <SectionAvatar uri={profiles[0].avtUri} name={profiles[0].name} />
            <View>
                <Text style={styles.textSetting}>Account</Text>
                <Text style={styles.textSetting}>Subcription</Text>
                <Text style={styles.textSetting}>Communication Preferences</Text>
                <View style={styles.toggleOptionContainer}>
                    <Text style={styles.textOption}>{Strings.darkTheme} </Text>
                    <Switch
                        trackColor={{ false: theme.colorLightBlack, true: theme.colorLightBlue }}
                        thumbColor={isEnabledTheme ? theme.colorLightBlue : theme.colorLightGray}
                        onValueChange={toggleTheme}
                        value={(theme === themes.dark) ? true : false}
                    />
                </View>
                <View style={styles.toggleOptionContainer}>
                    <Text style={styles.textOption}>{Strings.requireWifi} </Text>
                    <Switch
                        trackColor={{ false: theme.colorLightBlack, true: theme.colorLightBlue }}
                        thumbColor={isEnabledDownload ? theme.colorLightBlue : theme.colorLightGray}
                        onValueChange={toggleSwitchDownload}
                        value={(isEnabledDownload) ? true : false}
                    />
                </View>
                <View >
                    <Text style={styles.textVersion}>App version</Text>
                    <Text style={styles.textSmallSetting}>2.6.5</Text>
                </View>
                <View style={styles.signOutContainer}>
                    <TouchableOpacity style={styles.button} onPress={onPressSignOut}>
                        <View>
                            <Text style={styles.textStyle}>SIGN OUT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Setting;

