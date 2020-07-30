import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SectionAuthors from "./SectionAuthors/section-authors";
import Styles from "../../../global/style";
import SectionPath from "./SectionPath/section-path";
import SectionSkills from "./SectionSkills/section-skills";
import SectionCategories from "./SectionCategories/section-categories";
import SectionRecommendation from "./SectionRecommendation/section-recommendation";
import recommendations from "../../../global/data/recommendation-data";
import categories from "../../../global/data/category-data";
import skills from "../../../global/data/skill-data";
import { ThemeContext } from '../../../provider/theme/theme-provider';

const Browse = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        browseContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingStart: 10
        }
    });

    const paths = [{
        title: "Paths",
        data: [{
            name: "C++ Coding Practices",
            number: 4,
            uri: "https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"
        },
        {
            name: "Go Core Language",
            number: 9,
            uri: "https://i.ya-webdesign.com/images/golang-vector-5.png"
        },
        {
            name: "Design Pattern in C#",
            number: 16,
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/225px-C_Sharp_logo.svg.png"
        },
        {
            name: "Spring framework",
            number: 10,
            uri: "https://secure.gravatar.com/avatar/48f6611df6b60d2c8bcd74152e85278b?s=512"
        },
        ]
    }]

    const authors = [{
        title: "Top authors",
        data: [
            {
                uri: "https://images.daznservices.com/di/library/GOAL/b8/f1/cristiano-ronaldo-portugal-2019_whjgq33zotuc11co8jkpl4nom.jpg?t=1831780438&quality=60&w=1600",
                name: "Ronaldo",
            },
            {
                uri: "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=60&w=1600",
                name: "Messi",
            },
            {
                uri: "https://media.thethao247.vn/upload/cuongnm/2020/04/08/messi-rooney-2.jpg",
                name: "Rooney",
            },
            {
                uri: "https://images.daznservices.com/di/library/GOAL/18/26/paul-pogba-manchester-united_1plg3gwhcktaz1x8859wpokbpw.jpg?t=-63391920&quality=60&w=1600",
                name: "Pogba",
            },
            {
                uri: "https://miro.medium.com/max/1024/0*ZyaffzW4japxZT5p.jpg",
                name: "Maldini",
            },
            {
                uri: "https://trensanco.com/wp-content/uploads/2019/04/Alessandro-Nesta-hat-giong-trung-ve-xuat-sac-moi-thoi-dai.png",
                name: "Nesta",
            },
            {
                uri: "http://soccer-europe.com/images/Zinedine_Zidane_copyright_sportige_com.jpg",
                name: "Zidane",
            },
        ],
    },
    ];

    return (
        <View style={styles.browseContainer}>
            <ScrollView>
                <SectionRecommendation recommendations={recommendations} navigation={props.navigation} />
                <SectionCategories categories={categories} navigation={props.navigation} />
                <SectionSkills skills={skills[0]} navigation={props.navigation} />
                <SectionPath paths={paths[0]} navigation={props.navigation} />
                <SectionAuthors authors={authors[0]} navigation={props.navigation} />
            </ScrollView>
        </View>
    );
};

export default Browse;

