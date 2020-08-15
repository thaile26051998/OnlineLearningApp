import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Strings from '../../../global/string';
import Colors from '../../../global/color';
import StarRating from 'react-native-star-rating';
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthenticationContext } from "../../../provider/authentication-provider"
import { apiGetStudentCourseRating, apiRateCourse } from "../../../services/course-services"

const SectionRatingCourse = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isLoading, setLoading] = useState(true);
    const [content, setContent] = useState('');
    const [formalityPoint, setFormalityPoint] = useState(0);
    const [contentPoint, setContentPoint] = useState(0);
    const [presentationPoint, setPresentationPoint] = useState(0);
    const authContext = useContext(AuthenticationContext);
    const courseId = props.route.params.courseId;
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        //get student course rating
        apiGetStudentCourseRating(courseId, config).then((response) => {
            if (response.status === 200) {
                setFormalityPoint(response.data.payload.formalityPoint)
                setContentPoint(response.data.payload.contentPoint)
                setPresentationPoint(response.data.payload.presentationPoint)
                setContent(response.data.payload.content)
                setLoading(false)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })
    }, [])


    const styles = StyleSheet.create({
        textInput: {
            fontSize: 15,
            width: 380,
            height: 100,
            color: theme.colorWhite,
            marginBottom: 10,
            paddingStart: 20,
            backgroundColor: theme.colorInputBackground,
            borderRadius: 10,
            opacity: 0.9,
        },
        textInputContainer: {
            justifyContent: 'center',
            flexDirection: 'row'
        },
        sectionRatingCourseContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
        },
        starRatingContainer: {
            marginBottom: 10,
            width: 250,
            marginStart: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        textStyle: {
            color: theme.colorWhite,
            fontSize: 18,
            marginHorizontal: 5
        },
        testButtonStyle: {
            color: theme.colorWhite,
            fontSize: 22,
        },
        buttonContainer: {
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            justifyContent: "center",
            alignItems: "center",
            width: 380,
            height: 50,
            backgroundColor: theme.colorLightBlue,
            opacity: 0.9,
            margin: 10,
            borderRadius: 10
        },
        medalContainer: {
            marginEnd: 10,
            flexDirection: 'row',
            alignItems: 'center',
            width: 170,
        },
        videoThumbnail: {
            width: '100%',
            height: 250,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10,
            marginBottom: 10
        },
    });

    const onFormalityPointPress = (rating) => {
        setFormalityPoint(rating)
    }

    const onContentPointPress = (rating) => {
        setContentPoint(rating)
    }

    const onPresentationPointPress = (rating) => {
        setPresentationPoint(rating)
    }

    const onRateCourse = () => {
        apiRateCourse(courseId, formalityPoint, contentPoint, presentationPoint, content, config).then((response) => {
            if (response.status === 200) {
                Alert.alert(
                    "",
                    language.rateCourseSuccess,
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
                            },
                        },
                    ],
                    { cancelable: false }
                );
            } else {
                console.log("rate course failed")
            }
        }).catch((error) => {
            console.log("rate course failed")
        })
    }

    return (
        <View style={styles.sectionRatingCourseContainer}>
            <ImageBackground style={styles.videoThumbnail} source={{ uri: props.route.params.item.imageUrl != null ? props.route.params.item.imageUrl : props.route.params.item.courseImage }} />
            <View style={styles.starRatingContainer}>
                <View style={styles.medalContainer}>
                    <FontAwesome5 name="medal" size={18} color={theme.colorLightBlue} />
                    <Text style={styles.textStyle}>{language.formalityPointUpcase}</Text>
                </View>
                <StarRating
                    disabled={false}
                    starSize={20}
                    maxStars={5}
                    rating={formalityPoint}
                    selectedStar={(rating) => onFormalityPointPress(rating)}
                    fullStarColor={'yellow'}
                />
            </View>

            <View style={styles.starRatingContainer}>
                <View style={styles.medalContainer}>
                    <FontAwesome5 name="medal" size={18} color={theme.colorLightBlue} />
                    <Text style={styles.textStyle}>{language.contentPointUpcase}</Text>
                </View>
                <StarRating
                    disabled={false}
                    starSize={20}
                    maxStars={5}
                    rating={contentPoint}
                    selectedStar={(rating) => onContentPointPress(rating)}
                    fullStarColor={'yellow'}
                />
            </View>

            <View style={styles.starRatingContainer}>
                <View style={styles.medalContainer}>
                    <FontAwesome5 name="medal" size={18} color={theme.colorLightBlue} />
                    <Text style={styles.textStyle}>{language.presentationPointUpcase}</Text>
                </View>
                <StarRating
                    disabled={false}
                    starSize={20}
                    maxStars={5}
                    rating={presentationPoint}
                    selectedStar={(rating) => onPresentationPointPress(rating)}
                    fullStarColor={'yellow'}
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={language.plhEnterRating}
                    placeholderTextColor={theme.colorWhite}
                    keyboardType="default"
                    maxLength={1000}
                    multiline={true}
                    numberOfLines={10}
                    secureTextEntry={false}
                    onChangeText={text => setContent(text)}
                    defaultValue={content != "" ? content : null}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => onRateCourse()}>
                    <Text style={styles.testButtonStyle}>{language.rate}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionRatingCourse


