import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, SectionList, ScrollView, ImageBackground, ActivityIndicator, Alert } from "react-native";
import SectionCourses from "./SectionCourses/section-courses";
import SectionCoursesItem from "./SectionCourses/SectionCoursesItem/section-courses-item";
import Styles from "../../../global/style";
import SectionPath from "../Browse/SectionPath/section-path";
import { ThemeContext } from "../../../provider/theme/theme-provider";
import { LanguageContext } from "../../../provider/language/language-provider";
import Colors from "../../../global/color";
import axios from 'axios';
import { apiGetTopSellCourses, apiGetTopNewCourses, apiGetTopRateCourses } from "../../../services/course-services";
import Strings from "../../../global/string";
import languages from "../../../provider/language/language";

const Home = (props) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingTopSellCourses, setLoadingTopSellCourses] = useState(true);
  const [isLoadingTopNewCourses, setLoadingTopNewCourses] = useState(true);
  const [isLoadingTopRateCourses, setLoadingTopRateCourses] = useState(true);
  const [data, setData] = useState([]);
  const [dataTopNew, setTopNew] = useState([]);
  const [dataTopRate, setTopRate] = useState([]);

  useEffect(() => {
    //get top sell courses
    apiGetTopSellCourses().then((response) => {
      if (response.status === 200) {
        setData(response.data.payload)
        setLoadingTopSellCourses(false)
      } else {
        console.log("get course failed")
      }
    }).catch((error) => {
      console.log("get course failed")
    })

    //get top new courses
    apiGetTopNewCourses().then((response) => {
      if (response.status === 200) {
        setTopNew(response.data.payload)
        setLoadingTopNewCourses(false)
      } else {
        console.log("get course failed")
      }
    }).catch((error) => {
      console.log("get course failed")
    })

    //get top rate courses
    apiGetTopRateCourses().then((response) => {
      if (response.status === 200) {
        setTopRate(response.data.payload)
        setLoadingTopRateCourses(false)
      } else {
        console.log("get course failed")
      }
    }).catch((error) => {
      console.log("get course failed")
    })

    if (setLoadingTopSellCourses && setLoadingTopNewCourses && setLoadingTopRateCourses) {
      setLoading(false)
    }
  }, [])

  const styles = StyleSheet.create({
    homeContainer: {
      backgroundColor: theme.colorBackground,
      paddingLeft: 10,
    },
    imageThumbnail: {
      width: "100%",
      height: 150,
      justifyContent: 'center',
      alignItems: 'center'
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
      <ScrollView>
        <ImageBackground style={styles.imageThumbnail} source={{ uri: "https://i.pinimg.com/564x/98/b0/20/98b0208e5a0dd6e7b8b7b3d0959d07a5.jpg" }}>
          <Text style={Styles.categoriesName}>{language.welcomeToApp}</Text>
        </ImageBackground>
        <View style={styles.homeContainer}>
          <SectionCourses courses={data} navigation={props.navigation} header={language.topSellCourse} destination={Strings.sectionListCourse} itemData={data} />
          <SectionCourses courses={dataTopNew} navigation={props.navigation} header={language.topNewCourse} destination={Strings.sectionListCourse} itemData={dataTopNew} />
          <SectionCourses courses={dataTopRate} navigation={props.navigation} header={language.topRateCourse} destination={Strings.sectionListCourse} itemData={dataTopRate} />
        </View>
      </ScrollView>
    )
  }

  return (
    <View style={styles.sectionCoursesDetailContainer}>
      {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
      {!isLoading && renderBody()}
    </View>
  );
};

export default Home;


