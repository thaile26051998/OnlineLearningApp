import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionSkills from "../Browse/SectionSkills/section-skills"
import SectionAuthors from "../Browse/SectionAuthors/section-authors"
import { apiGetRecommendationCourses, apiGetProcessCourses } from "../../../services/user-services";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { apiGetAllInstructor } from "../../../services/author-service";
import { apiGetAllCategories } from "../../../services/subject-services";
import Strings from "../../../global/string";
import Colors from "../../../global/color";

const Browse = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [recommendData, setRecommendData] = useState([]);
    const [processData, setProcessData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [instructorData, setInstructorData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const authContext = useContext(AuthenticationContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const id = authContext.state.userInfo.id;
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        //get process courses
        apiGetProcessCourses(config).then((response) => {
            if (response.status === 200) {
                setProcessData(response.data.payload)
                console.log(response.data.payload)
                setLoading(false)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })
    })

    useEffect(() => {
        //get top sell courses
        apiGetRecommendationCourses(id).then((response) => {
            if (response.status === 200) {
                setRecommendData(response.data.payload)
                setLoading(false)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })

        //get all categories
        apiGetAllCategories().then((response) => {
            if (response.status === 200) {
                setCategoryData(response.data.payload)
                setLoading(false)
            } else {
                console("get category failed")
            }
        }).catch((error) => {
            console("get category failed")
        })

        //get all instructors
        apiGetAllInstructor(config).then((response) => {
            if (response.status === 200) {
                setInstructorData(response.data.payload)
                setLoading(false)
            } else {
                console.log("get instructors failed")
            }
        }).catch((error) => {
            console.log("get instructors failed")
        })
    }, [])

    const styles = StyleSheet.create({
        browseContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingStart: 10
        },
        sectionInstructorContainer: {
            marginBottom: 20
        },
        sectionCategoryContainer: {
            marginTop: 10
        },
        indicatorStyle: {
            flex: 1,
            backgroundColor: Colors.colorBackground,
            alignItems: "center",
            justifyContent: "center",
        }
    });

    const renderBody = () => {
        return (
            <View>
                <ScrollView>
                    {isLoading && <ActivityIndicator size="large" color={theme.colorLightBlue} />}
                    <SectionCourses courses={processData} navigation={props.navigation} header={language.learningCourse} destination={Strings.sectionListCourse} itemData={processData} />
                    <SectionCourses courses={recommendData} navigation={props.navigation} header={language.recommendForYou} destination={Strings.sectionListCourse} itemData={recommendData} />
                    <View style={styles.sectionCategoryContainer}>
                        <SectionSkills categories={categoryData} navigation={props.navigation} header={language.category}/>
                    </View>
                    <View style={styles.sectionInstructorContainer}>
                        <SectionAuthors authors={instructorData} navigation={props.navigation} header={language.instructor} />
                    </View>
                </ScrollView>
            </View>
        )
    }

    return (
        <View style={styles.browseContainer}>
            {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
            {!isLoading && renderBody()}
        </View>
    );
};

export default Browse;

