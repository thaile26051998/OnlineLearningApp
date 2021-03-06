import React, { useContext } from 'react'
import { View, Text, StyleSheet, Settings } from 'react-native'
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Strings from '../../global/string';
import Profile from '../../components/AccountManagement/Profile/profile'
import Home from '../Main/Home/home';
import SectionCoursesDetail from '../SectionCourseDetail/section-courses-detail';
import Download from '../Main/Download/download';
import Browse from '../Main/Browse/browse';
import SectionPathDetail from '../Main/Browse/SectionPath/SectionPathDetail/section-path-detail';
import SectionRecommendationDetail from '../Main/Browse/SectionRecommendation/SectionRecommendationDetail/section-recommendation-detail';
import SectionCategoriesDetail from '../Main/Browse/SectionCategories/SectionCategoriesDetail/section-categories-detail';
import SectionSkilsDetail from '../Main/Browse/SectionSkills/SectionSkillsDetail/section-skills-detail';
import SectionAuthorsDetail from '../Main/Browse/SectionAuthors/SectionAuthorsDetail/section-authors-detail';
import Search from '../Main/Search/search';
import Setting from '../Others/Settings/settings'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../global/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import SendFeedback from '../Others/SendFeedback/send-feedback';
import Login from '../Authentication/Login/login';
import { ThemeContext } from '../../provider/theme/theme-provider'
import { LanguageContext } from '../../provider/language/language-provider'
import SectionFavorite from '../Main/Favorite/section-favorite';
import ListCourses from '../ListCourses/list-courses';
import SectionListCourse from '../Others/SectionListCourse/section-list-course';
import SectionRatingCourse from '../SectionCourseDetail/SectionRatingCourse/section-rating-course';
import languages from '../../provider/language/language';
import SectionCourseLessonDetail from '../SectionCourseDetail/SectionCourseLessonDetail/section-course-lesson-detail';

const stackScreenOption = (navigation) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const onPressProfile = () => {
        navigation.navigate(Strings.profile)
    }

    const onPressSettings = () => {
        navigation.navigate(Strings.settings)
    }

    const onPressFeedback = () => {
        navigation.navigate(Strings.sendFeedback)
    }

    const styles = StyleSheet.create({
        menuContainer: {
            backgroundColor: theme.colorBackground,
        },
        headerMenuOptionContainer: {
            padding: 10,
            backgroundColor: theme.colorBackground
        },
        textOption: {
            fontSize: 18,
            color: theme.colorWhite
        }
    })

    return ({
        headerStyle: {
            backgroundColor: theme.colorBoldGray,
        },
        headerTintColor: theme.colorWhite,
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginEnd: 20 }} onPress={onPressProfile}>
                    <FontAwesome name="user-circle-o" size={22} color={theme.colorWhite} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginEnd: 10 }}>
                    <Menu >
                        <MenuTrigger>
                            <Entypo name="dots-three-vertical" size={20} color={theme.colorWhite} />
                        </MenuTrigger>
                        <MenuOptions style={styles.menuContainer}>
                            <MenuOption onSelect={() => onPressSettings()} >
                                <View style={styles.headerMenuOptionContainer}>
                                    <Text style={styles.textOption}>Settings</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => onPressFeedback()} >
                                <View style={styles.headerMenuOptionContainer}>
                                    <Text style={styles.textOption} >Send feedbacks</Text>
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </TouchableOpacity>
            </View>
        ),
    })
}

const stackScreenDetailOption = (navigation) => {
    return ({
        headerShown: false,
    })
}

const HomeStack = createStackNavigator();

const HomeStackNavigation = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return <HomeStack.Navigator mode="modal" screenOptions={({ navigation }) => stackScreenOption(navigation)}>
        <HomeStack.Screen name={Strings.home} component={Home}
            options={({ route }) => ({ title: language.home })}
        />
        <HomeStack.Screen name={Strings.courseDetail} component={SectionCoursesDetail} options={{
            title: language.courseDetail,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.lessonDetail} component={SectionCourseLessonDetail} options={{
            title: language.lessonDetail,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.ratingCourse} component={SectionRatingCourse} options={{
            title: language.ratingCourse,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.listCourse} component={ListCourses} options={{
            title: language.listCourse,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.profile} component={Profile} options={{
            title: language.profile,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.settings} component={Setting} options={{
            title: language.settings,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.sectionListCourse} component={SectionListCourse} options={{
            title: language.listCourse,
            headerRight: null
        }} />
        <HomeStack.Screen name={Strings.skills} component={SectionSkilsDetail} options={{
            headerRight: null
        }} />
    </HomeStack.Navigator>
}

const FavoriteStack = createStackNavigator();

const FavoriteStackNavigation = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return <FavoriteStack.Navigator mode="modal" screenOptions={({ navigation }) => stackScreenOption(navigation)}>
        <FavoriteStack.Screen name={Strings.favorite} component={SectionFavorite}
            options={({ route }) => ({ title: language.favorite })}
        />
        <FavoriteStack.Screen name={Strings.courseDetail} component={SectionCoursesDetail} options={{
            title: language.courseDetail,
            headerRight: null
        }} />
        <FavoriteStack.Screen name={Strings.profile} component={Profile} options={{
            title: language.profile,
            headerRight: null
        }} />
        <FavoriteStack.Screen name={Strings.settings} component={Setting} options={{
            title: language.settings,
            headerRight: null
        }} />
    </FavoriteStack.Navigator>
}

const BrowseStack = createStackNavigator();

const BrowseStackNavigation = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return <BrowseStack.Navigator mode="modal" screenOptions={({ navigation }) => stackScreenOption(navigation)}>
        <BrowseStack.Screen name={Strings.browse} component={Browse} options={{ title: language.browse }} />
        <BrowseStack.Screen name={Strings.recommendation} component={SectionRecommendationDetail} options={stackScreenDetailOption} />
        <BrowseStack.Screen name={Strings.category} component={SectionCategoriesDetail} options={stackScreenDetailOption} />
        <BrowseStack.Screen name={Strings.skills} component={SectionSkilsDetail} options={{
            title: language.categoryDetail,
            headerRight: null
        }} />
        <BrowseStack.Screen name={Strings.authors} component={SectionAuthorsDetail} options={{
            title: language.authors,
            headerRight: null
        }} />
        <BrowseStack.Screen name={Strings.courseDetail} component={SectionCoursesDetail} options={{
            title: language.courseDetail,
            headerRight: null
        }} />
        <BrowseStack.Screen name={Strings.sectionListCourse} component={SectionListCourse} options={{
            title: language.listCourse,
            headerRight: null
        }} />
        <BrowseStack.Screen name={Strings.profile} component={Profile} options={{
            title: language.profile,
            headerRight: null
        }} />
        <BrowseStack.Screen name={Strings.settings} component={Setting} options={{
            title: language.settings,
            headerRight: null
        }} />
    </BrowseStack.Navigator>
}

const SearchStack = createStackNavigator();

const SearchStackNavigation = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    return <SearchStack.Navigator mode="modal" screenOptions={({ navigation }) => stackScreenOption(navigation)}>
        <SearchStack.Screen name={Strings.search} component={Search}
            options={{
                headerShown: false
            }}
        />
        <SearchStack.Screen name={Strings.courseDetail} component={SectionCoursesDetail} options={{
            title: language.courseDetail,
            headerRight: null
        }} />
        <SearchStack.Screen name={Strings.authors} component={SectionAuthorsDetail} options={{
            title: language.authors,
            headerRight: null
        }} />
    </SearchStack.Navigator>
}


const mainTabNavigationOptions = {
    inactiveTintColor: Colors.colorWhite,
    labelStyle: { fontSize: 12, fontWeight: "normal" },
    style: {
        backgroundColor: Colors.colorBoldGray,
        borderTopColor: Colors.colorBoldGray,
        paddingTop: 5,
        paddingBottom: 5,
    }
}

const MainBottomTab = createBottomTabNavigator();

const mainTabNavigationIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === Strings.home) {
        iconName = "home"
    } else if (route.name === Strings.favorite) {
        iconName = "favorite";
    } else if (route.name === Strings.browse) {
        iconName = "open-in-browser";
    } else {
        iconName = "search"
    }

    return <MaterialIcons name={iconName} size={size} color={color} />;
}

export const MainTabNavigation = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return <MainBottomTab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => mainTabNavigationIcon(route, focused, color, size)
    })}
        tabBarOptions={{
            activeTintColor: theme.colorLightBlue,
            inactiveTintColor: theme.colorWhite,
            labelStyle: { fontSize: 12, fontWeight: "normal" },
            style: {
                backgroundColor: theme.colorBoldGray,
                borderTopColor: theme.colorBoldGray,
                paddingTop: 5,
                paddingBottom: 5,
            }
        }
        }>
        <MainBottomTab.Screen name={Strings.home} component={HomeStackNavigation} options={{ title: language.home }} />
        <MainBottomTab.Screen name={Strings.favorite} component={FavoriteStackNavigation} options={{ title: language.favorite }} />
        <MainBottomTab.Screen name={Strings.browse} component={BrowseStackNavigation} options={{ title: language.browse }} />
        <MainBottomTab.Screen name={Strings.search} component={SearchStackNavigation} options={{ title: language.search }}/>
    </MainBottomTab.Navigator>
}
