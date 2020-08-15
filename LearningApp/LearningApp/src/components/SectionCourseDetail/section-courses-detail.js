import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import SectionCourseDetailInfo from './SectionCourseDetailInfo/section-course-detail-info'
import Colors from '../../global/color';
import { apiGetCourseDetailInfo, apiGetProgressCourse } from '../../services/course-services'
import SectionListVideo from './SectionListVideo/section-list-video';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../provider/theme/theme-provider';
import { LanguageContext } from "../../provider/language/language-provider";
import SectionCourseVideo from './SectionCourseVideo/section-course-video';
import { AuthenticationContext } from "../../provider/authentication-provider"
import SectionCourses from '../Main/Home/SectionCourses/section-courses';
import Strings from '../../global/string';
import ListCourses from '../ListCourses/list-courses';
import SectionRatingStar from './SectionRatingStar/section-rating-star';
import SectionStudentRating from './SectionStudentRating/section-student-rating';
import { ActivityIndicator } from 'react-native-paper';

const SectionCoursesDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const [isLoading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState({});
    const [lesson, setLesson] = useState([]);
    const [stars, setStars] = useState({});
    const [ratingList, setRatingList] = useState([])
    const [progress, setProgress] = useState(0);

    const authContext = useContext(AuthenticationContext);

    let item = props.route.params.item;
    const courseId = item.id;

    const id = authContext.state.userInfo.id;
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const styles = StyleSheet.create({
        sectionCoursesDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorLightBlack,
            flexDirection: 'column'
        },
        textTitle: {
            fontSize: 20,
            color: theme.colorLightGray,
            fontWeight: "bold",
            marginStart: 10,
            marginBottom: 10
        },
        imageRecommendation: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        videoThumbnail: {
            width: '100%',
            height: 250,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10
        },
        listCoursesContainer: {
            marginBottom: 5
        },
        indicatorStyle: {
            flex: 1,
            backgroundColor: Colors.colorBackground,
            alignItems: "center",
            justifyContent: "center",
        }
    })

    useEffect(() => {
        //get course detail
        apiGetCourseDetailInfo(courseId, id).then((response) => {
            if (response.status === 200) {
                setCourseData(response.data.payload)
                setStars(response.data.payload.ratings.stars)
                setRatingList(response.data.payload.ratings.ratingList)
                setLesson(response.data.payload.section)
                setLoading(false)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })

        //get progress of course
        apiGetProgressCourse(courseId, config).then((response) => {
            if (response.status === 200) {
                setProgress(response.data.payload)
                setLoading(false)
            } else {
                console.log("get progress failed")
            }
        }).catch((error) => {
            console.log("get progress failed")
        })
    }, [])

    const renderBody = () => {
        return (
            <View>
                <ScrollView>
                    <View style={styles.sectionCoursesDetailContainer}>
                        <ImageBackground style={styles.videoThumbnail} source={{ uri: courseData.imageUrl != null ? courseData.imageUrl : courseData.courseImage }} />
                        <SectionCourseDetailInfo item={courseData} progress={progress} navigation={props.navigation} />
                        <Text style={styles.textTitle}>{`${courseData.promoVidUrl != null ? language.trailer : language.trailerUpdating}`}</Text>
                        <SectionCourseVideo url = {courseData.promoVidUrl}/>
                        <Text style={styles.textTitle}>{language.lesson}</Text>
                        <SectionListVideo lesson={lesson} navigation={props.navigation} />
                        <Text style={styles.textTitle}>{language.ratingFromStudent}</Text>
                        <SectionRatingStar item={courseData} stars={stars} />
                        <SectionStudentRating ratingList={ratingList} item={courseData} courseId= {courseId}/>
                        <Text style={styles.textTitle}>{language.coursesLikeCategory}</Text>
                        <View style={styles.listCoursesContainer}>
                            <ListCourses itemData={courseData.coursesLikeCategory} navigation={props.navigation} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    
    return (
        <View style={styles.sectionCoursesDetailContainer}>
            {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
            {!isLoading && renderBody()}
        </View>
    )
}

export default SectionCoursesDetail