import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionAuthorsInfo from './SectionAuthorsInfo/section-authors-info'
import Styles from '../../../../../global/style'
import ListCourses from '../../../../ListCourses/list-courses'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';

const SectionAuthorsDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionAuthorDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingHorizontal: 10
        },
        textMedium: {
            fontSize: 16,
            color: theme.colorWhite,
          },

    })
    const author = {
        uri: "https://images.daznservices.com/di/library/GOAL/b8/f1/cristiano-ronaldo-portugal-2019_whjgq33zotuc11co8jkpl4nom.jpg?t=1831780438&quality=60&w=1600",
        name: "Dr. Ronaldo",
        role: "Pluralsight Author",
        introduce: "Whether playing on the local Radio Shack's TRS-80 or designing systems for clients around the globe, Miguel has been writing software since he was 12 years old. He insists on staying heavily involved and up-to-date on all aspects of software application design & development, and projects that diversity onto the type of training and consulting he provides to his customers and believes that it’s never just about understand the technologies, but how technologies work together. Miguel is a Microsoft MVP since 2005 and when he’s not consulting or training.",
        url: "www.dotnetdude.com"
    }

    const courses = [
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
            author: "Ronaldo",
            level: "Beginner",
            released: "May 16, 2020",
            duration: "58 hours",
            uri:
                "https://www.downloadoldversion.com/wp-content/uploads/2019/07/Software-Photo.png",
        },
        {
            id: 3,
            title: "IOS",
            author: "Ronaldo",
            level: "Advanced",
            released: "Jun 6, 2020",
            duration: "30 hours",
            uri:
                "https://hbr.org/resources/images/article_assets/2018/10/oct18_26_758313937.jpg",
        },
    ];

    return (
        <View style={styles.sectionAuthorDetailContainer}>
            <ScrollView>
                <SectionAuthorsInfo author={author} />
                <View style={Styles.sectionCoursesHeader}>
                    <Text style={[styles.textMedium, { marginVertical: 30 }]}>Courses</Text>
                </View>
                <ListCourses courses={courses} />
            </ScrollView>
        </View>
    )
}

export default SectionAuthorsDetail
