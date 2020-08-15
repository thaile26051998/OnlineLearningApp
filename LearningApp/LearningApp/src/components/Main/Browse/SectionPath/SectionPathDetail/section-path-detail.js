import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionPathInfo from './SectionPathInfo/section-path-info'
import SectionPathProgress from './SectionPathProgress/section-path-progress'
import SectionPathCourses from './SectionPathCourses/section-path-courses'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionPathDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionAuthorDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingHorizontal: 10
        },
    })

    const path = {
        name: "C++ Coding Practices",
        number: "3",
        hour: "6",
        progress: "0",
        uri: "https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png",
        introduce: "Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET. First you will learn how to work with files and streams, then how to access databases using ADO.NET and finally how to call APIs with .NET's HttpClient."
    }

    const courses = [
        {
            title: "Beginer",
            data: [
                {
                    id: 1,
                    title: "Golang",
                    author: "Lisa",
                    level: "Advanced",
                    released: "May 8, 2022",
                    duration: "50 hours",
                    uri:
                        "https://getflywheel.com/layout/wp-content/uploads/2019/12/FB-Group-Karen.png",
                },
                {
                    id: 2,
                    title: "NodeJS",
                    author: "Maldini",
                    level: "Beginner",
                    released: "June 10, 2020",
                    duration: "58 hours",
                    uri:
                        "https://www.downloadoldversion.com/wp-content/uploads/2019/07/Software-Photo.png",
                },
                {
                    id: 3,
                    title: "ReactJS",
                    author: "Nesta",
                    level: "Advanced",
                    released: "Jun 6, 2021",
                    duration: "30 hours",
                    uri:
                        "https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg",
                },
            ],
        },
        {
            title: "Intermediate",
            data: [
                {
                    id: 1,
                    title: "C++",
                    author: "Ronaldo De Lima",
                    level: "Advanced",
                    released: "May 8, 2022",
                    duration: "50 hours",
                    uri:
                        "https://getflywheel.com/layout/wp-content/uploads/2019/12/FB-Group-Karen.png",
                },
                {
                    id: 2,
                    title: "Linux",
                    author: "Zidane",
                    level: "Beginner",
                    released: "June 10, 2020",
                    duration: "58 hours",
                    uri:
                        "https://i.pinimg.com/564x/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg",
                },
                {
                    id: 3,
                    title: "C#",
                    author: "Pogba",
                    level: "Advanced",
                    released: "Jun 6, 2021",
                    duration: "30 hours",
                    uri:
                        "https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg",
                },
            ],
        },
        {
            title: "Advanced",
            data: [
                {
                    id: 1,
                    title: "React native",
                    author: "Ronaldo",
                    level: "Advanced",
                    released: "May 6, 2020",
                    duration: "38 hours",
                    uri:
                        "https://i.ytimg.com/vi/eNNAnSCrrBI/maxresdefault.jpg",
                },
                {
                    id: 2,
                    title: "Android",
                    author: "Messi",
                    level: "Beginner",
                    released: "May 16, 2020",
                    duration: "58 hours",
                    uri:
                        "https://www.downloadoldversion.com/wp-content/uploads/2019/07/Software-Photo.png",
                },
                {
                    id: 3,
                    title: "IOS",
                    author: "Rooney",
                    level: "Advanced",
                    released: "Jun 6, 2020",
                    duration: "30 hours",
                    uri:
                        "https://hbr.org/resources/images/article_assets/2018/10/oct18_26_758313937.jpg",
                },
            ],
        },
    ];

    return (
        <View style={styles.sectionAuthorDetailContainer}>
            <ScrollView>
                <SectionPathInfo path={path} />
                <SectionPathProgress progress={path.progress} />
                <SectionPathCourses courses={courses} />
            </ScrollView>
        </View>
    )
}

export default SectionPathDetail


