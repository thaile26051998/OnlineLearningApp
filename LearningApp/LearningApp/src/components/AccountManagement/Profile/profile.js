import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import SectionAvatar from './SectionAvatar/section-avatar'
import SectionSkills from '../../Main/Browse/SectionSkills/section-skills'
import Styles from '../../../global/style'
import SectionProfileInfo from './SectionProfileInfo/section-profile-info'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { AuthenticationContext } from "../../../provider/authentication-provider"
import { apiGetUserInfo, apiUpdateUserInfo } from '../../../services/user-services'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Strings from '../../../global/string'

const Profile = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setLoading] = useState(true);

    const authContext = useContext(AuthenticationContext);
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        //get user info
        apiGetUserInfo(config).then((response) => {
            if (response.status === 200) {
                setAvatar(response.data.payload.avatar)
                setName(response.data.payload.name)
                setPhone(response.data.payload.phone)
                setEmail(response.data.payload.email)
                setLoading(false)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })
    }, [])

    const profile = {
        name: name,
        email: email,
        phone: phone,
    }

    function getName(name) {
        setName(name)
    }

    function getPhone(phone) {
        setPhone(phone)
    }

    let stringAlt = Strings.plsEnter;
    const onPressEditProfile = () => {
        if (name === "") {
            Alert.alert(
                "",
                stringAlt + Strings.nameSingle,
                [
                    {
                        text: Strings.OK,
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        } else if (phone === "") {
            Alert.alert(
                "",
                stringAlt + Strings.phoneSingle,
                [
                    {
                        text: Strings.OK,
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        } else if (phone === "" && name === "") {
            Alert.alert(
                "",
                stringAlt + Strings.nameSingle + ", " + Strings.phoneSingle,
                [
                    {
                        text: Strings.OK,
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        } else {
            apiUpdateUserInfo(name, avatar, phone, config).then((response) => {
                if (response.status === 200) {

                    Alert.alert(
                        "",
                        Strings.editProfileSuccess,
                        [
                            {
                                text: Strings.OK,
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                        ],
                        { cancelable: false }
                    );
                } else {
                    console.log("edit profile failed")
                }
            }).catch((error) => {
                console.log("error")
            })
        }
    }

    const styles = StyleSheet.create({
        profileContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
        },
        buttonContainer: {
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            height: 40,
            backgroundColor: theme.colorLightBlue,
            opacity: 0.9,
            margin: 10,
            borderRadius: 10
        },
        textStyle: {
            color: theme.colorWhite,
            fontSize: 16,
            fontWeight: "bold",
        },
    })

    return (
        <View style={styles.profileContainer}>
            <SectionAvatar uri={avatar} name={name} />
            <SectionProfileInfo profile={profile} onChangeName={getName} onChangePhone={getPhone} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => onPressEditProfile()}>
                    <Text style={styles.textStyle}>{Strings.EDITPROFILE}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;


