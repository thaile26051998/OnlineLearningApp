import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import Colors from '../../../global/color';
import { apiGetLessonVideo, apiGetLessonHomework } from '../../../services/course-services'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import { AuthenticationContext } from "../../../provider/authentication-provider"
import { ActivityIndicator, ProgressBar } from 'react-native-paper';
import SectionCourseVideo from '../SectionCourseVideo/section-course-video';
import SectionCourseHomeworkItem from './section-course-homework-item';

const SectionCourseLessonDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isLoading, setLoading] = useState(true);
    const [videoData, setVideoData] = useState({});
    const [homework, setHomework] = useState([]);
    const authContext = useContext(AuthenticationContext);
    let item = props.route.params.item;
    const courseId = item.courseId;
    const lessonId = item.id;

    const id = authContext.state.userInfo.id;
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const styles = StyleSheet.create({
        sectionLessonDetailContainer: {
            flex: 1,
            height: 1000,
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
        videoThumbnail: {
            width: '100%',
            height: 250,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10
        },
        indicatorStyle: {
            flex: 1,
            backgroundColor: Colors.colorBackground,
            alignItems: "center",
            justifyContent: "center",
        },
        textInfo: {
            color: theme.colorWhite,
            fontSize: 16,
            marginStart: 10
        },
        textTite: {
            color: theme.colorWhite,
            fontSize: 18,
            fontWeight: 'bold',
            marginStart: 10
        },
        textProgress: {
            fontSize: 17,
            color: theme.colorLightGray,
            fontWeight: "bold",
            marginStart: 10
        },
        progressStyle: {
            height: 10,
            width: 200,
            borderRadius: 10
        },
        progressBarContainer: {
            width: 200,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginStart: 10
        }
    })

    useEffect(() => {
        //get lesson video detail
        apiGetLessonVideo(courseId, lessonId, config).then((response) => {
            if (response.status === 200) {
                setVideoData(response.data.payload)
                setLoading(false)
            } else {
                console.log("get video failed")
            }
        }).catch((error) => {
            console.log("get video failed")
        })
        setLoading(false)

        //get lesson homework
        apiGetLessonHomework(lessonId, config).then((response) => {
            if (response.status === 200) {
                setHomework(response.data.payload.exercises)
                setLoading(false)
            } else {
                console.log("get homework failed")
            }
        }).catch((error) => {
            console.log("get homework failed")
        })
        setLoading(false)
    }, [])

    const renderSeparatorView = () => {
        return (
          <View style={{
            height: 0.5,
            width: "100%",
            opacity: 0.5,
            backgroundColor: theme.colorLightGray,
            marginTop: 5
          }}
          />
        );
      };

    const renderBody = () => {
        return (
            <View>
                <ScrollView>
                    <SectionCourseVideo url={item.videoUrl} />
                    <Text style={styles.textTite}>{`${language.lesson} ${item.numberOrder}: ${item.name}`}</Text>
                    <Text style={styles.textInfo}>{`${language.currentVideoTime}: ${Math.round(videoData.currentTime * 10) / 10}s`}</Text>
                    <View style={styles.progressBarContainer}>
                        <ProgressBar
                            progress={Math.round(videoData.currentTime / (item.hours * 3600) * 100) / 100}
                            style={styles.progressStyle}
                            color="#288DBC" />
                        <Text style={styles.textProgress}>{`${Math.round(videoData.currentTime / (item.hours * 3600) * 100) / 100}%`}</Text>
                    </View>
                    <Text style={styles.textTitle}>{language.homework}</Text>
                    <FlatList
                        data={homework}
                        ItemSeparatorComponent={renderSeparatorView}
                        renderItem={({ item }) => <SectionCourseHomeworkItem item={item} navigation={props.navigation} />}
                    />
                </ScrollView>
            </View>
        )
    }

    return (
        <View style={styles.sectionLessonDetailContainer}>
            {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
            {!isLoading && renderBody()}
        </View>
    )
}

export default SectionCourseLessonDetail