import React, { useContext, useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Alert, ActivityIndicator, Linking, Share } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../global/color';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../../provider/language/language-provider";
import Strings from '../../../../global/string';
import { AuthenticationContext } from "../../../../provider/authentication-provider"
import { apiGetCourseLikeStatus, apiLikeCourse } from '../../../../services/user-services';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { apiCheckOwnCourse, apiGetFreeCourse } from '../../../../services/course-services';

const SectionCourseDetailWidget = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isLoading, setLoading] = useState(true);
    const authContext = useContext(AuthenticationContext);
    const [likeStatus, setLikeStatus] = useState(false);
    const [enrollStatus, setEnrollStatus] = useState(false);

    const id = authContext.state.userInfo.id;

    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const courseId = props.item.id;
    const data = {
        courseId
    };

    const styles = StyleSheet.create({
        sectionCourseDetailWidgetContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
        },
        widgetItemContainer: {
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        textWidget: {
            color: theme.colorWhite,
            fontSize: 15
        },
        textLike: {
            color: likeStatus == true ? theme.colorRed : theme.colorWhite,
            fontSize: 15
        },
        textEnroll: {
            color: enrollStatus == true ? theme.colorRed : theme.colorWhite,
            fontSize: 15
        }
    })

    useEffect(() => {
        //get course like status
        apiGetCourseLikeStatus(courseId, config).then((response) => {
            if (response.status === 200) {
                setLikeStatus(response.data.likeStatus)
            }
        }).catch((error) => {
            console.log("get status failed")
        })

        //check own course
        apiCheckOwnCourse(courseId, config).then((response) => {
            if (response.status === 200) {
                setEnrollStatus(response.data.payload.isUserOwnCourse)
            }
        }).catch((error) => {
            console.log("error")
        })
    })

    const renderLikeStatus = () => {
        if (likeStatus == true) {
            return (
                <View>
                    <FontAwesome name="heart" size={24} color={theme.colorRed} />
                </View>
            )
        } else {
            return (
                <View>
                    <FontAwesome name="heart-o" size={24} color={theme.colorWhite} />
                </View>
            )
        }
    }

    const renderEnrollStatus = () => {
        if (enrollStatus == true) {
            return (
                <View>
                    <Entypo name="add-to-list" size={24} color={theme.colorRed} />
                </View>
            )
        } else {
            return (
                <View>
                    <Entypo name="add-to-list" size={24} color={theme.colorWhite} />
                </View>
            )
        }
    }

    const onLikeCourse = () => {
        apiLikeCourse(data, config).then((response) => {
            if (response.status === 200) {
                setLikeStatus(!likeStatus)
                console.log("like course success")
            } else {
                console.log("like course failed")
            }
        }).catch((error) => {
            console.log("like course failed")
        })
    }

    const courseUrl = `{https://itedu.me/course-detail/${courseId}}`;
    const onShareCourse = async () => {
        try {
            const result = await Share.share({
                title:
                    'Online learning app\n',
                message:
                    `Welcome to our app. Let try to view this course.\n${courseUrl}`,
                url:
                    `${courseUrl}`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const onEnrollCourse = () => {
        if (enrollStatus == false) {
            if (props.item.price === 0) {
                Alert.alert(
                    "",
                    language.enrollCourseRequest,
                    [
                        {
                            text: language.CANCEL,
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: language.OK,
                            onPress: () => {
                                console.log("OK Pressed")
                                apiGetFreeCourse(courseId, config).then((response) => {
                                    if (response.status === 200) {
                                        setEnrollStatus(true)
                                        console.log("enroll course success")
                                    } else {
                                        console.log("enroll course failed")
                                    }
                                }).catch((error) => {
                                    console.log("error")
                                })
                            },
                        },
                    ],
                    { cancelable: false }
                );
            } else {
                const url = `https://itedu.me/payment/${id}`;
                Linking.openURL(url)
            }

        }
    }

    const onRatingCourse = () => {
        props.navigation.navigate(language.ratingCourse, { item: props.item, courseId : courseId })
    }

    return (
        <View style={styles.sectionCourseDetailWidgetContainer}>
            <View >
                <TouchableOpacity style={styles.widgetItemContainer} onPress={() => onLikeCourse()}>
                    {renderLikeStatus()}
                    <Text style={styles.textLike}>{likeStatus == true ? language.likedCourse : language.likeCourse}</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.widgetItemContainer} onPress={() => onEnrollCourse()}>
                    {renderEnrollStatus()}
                    <Text style={styles.textEnroll}>{enrollStatus == true ? language.enrolled : language.enroll}</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.widgetItemContainer} onPress={() => onRatingCourse()}>
                    <AntDesign name="staro" size={24} color={theme.colorWhite} />
                    <Text style={styles.textWidget}>{language.rate}</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.widgetItemContainer} onPress={() => onShareCourse()}>
                    <Entypo name="share" size={24} color={theme.colorWhite} />
                    <Text style={styles.textWidget}>{language.share}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionCourseDetailWidget