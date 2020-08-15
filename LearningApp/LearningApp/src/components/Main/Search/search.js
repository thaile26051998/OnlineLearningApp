import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Alert } from 'react-native'
import RecentSearchesList from './RecentSearches/recent-searches-list'
import Styles from '../../../global/style'
import { SearchBar } from 'react-native-elements';
import ListCourses from '../../ListCourses/list-courses';
import { apiSearchCourse, apiGetSearchHistory, apiDeleteSearchHistory } from '../../../services/course-services'
import Strings from '../../../global/string';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import ListInstructors from '../../ListInstructors/list-instructors';
import { AuthenticationContext } from "../../../provider/authentication-provider"
import TabSearch from './TabSearch/tab-search';

const Search = (props) => {
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isLoading, setLoading] = useState(false);
    const [numOfCourse, setNumOfCourse] = useState(0);
    const [numOfInstructor, setNumOfInstructor] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);
    const [instructorData, setInstructorData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [subInstructorData, setSubInstructorData] = useState([]);
    const [recentKeyArr, setRecentKeyArr] = useState([]);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [allActive, setAllActive] = useState(true);
    const [courseActive, setCourseActive] = useState(false);
    const [instructorActive, setInstructorActive] = useState(false);
    const authContext = useContext(AuthenticationContext);
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const styles = StyleSheet.create({
        searchStyle: {
            backgroundColor: theme.colorBackground,
            height: 60,
            width: 340
        },
        inputStyle: {
            height: 40,
            width: 330,
        },
        textSeachStyle: {
            fontSize: 15,
            color: theme.colorLightBlue,
            
        },
        textSeachContainer:{
            flexDirection: 'row',
            justifyContent: 'center'
        },  
        seachBarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        sectionName: {
            color: theme.colorWhite,
            fontSize: 18,
            fontWeight: "bold",
            marginStart: 5
        },
        sectionNumberOfRes: {
            color: theme.colorLightGray,
            fontSize: 14,
            fontWeight: "bold"
        },
        searchContainer: {
            paddingHorizontal: 10,
            flex: 1
        },
        container: {
            flex: 1,
            backgroundColor: theme.colorBackground,
        }
    })

    useEffect(() => {
        apiGetSearchHistory(config).then((response) => {
            if (response.status === 200) {
                setRecentKeyArr(response.data.payload.data)
                setLoading(false)
            } else {
                console.log("get course failed")
                setLoading(false)
            }
        }).catch((error) => {
            console.log("error")
            setLoading(false)
        })
    })

    //get recent keyword value
    function getRecentKeywordValue(value) {
        setKeyword(value)
        setData([])
        setInstructorData([])
    }

    //get course data
    const getCourseData = () => {
        setLoading(true)
        setData([])
        setInstructorData([])
        setSubData([])
        setSubInstructorData([])
        setAllActive(true)
        setCourseActive(false)
        setInstructorActive(false)

        apiSearchCourse(token, keyword).then((response) => {
            if (response.status === 200) {
                setData(response.data.payload.courses.data)
                setInstructorData(response.data.payload.instructors.data)
                setSubData(response.data.payload.courses.data)
                setSubInstructorData(response.data.payload.instructors.data)
                setNumOfCourse(response.data.payload.courses.total)
                setNumOfInstructor(response.data.payload.instructors.total)
                setLoading(false)
            } else {
                console.log("get course failed")
                setLoading(false)
            }
        }).catch((error) => {
            console.log("error")
            setLoading(false)
        })
    }

    //remove recent key
    const removeRecentKey = (keyId) => {
        setLoading(true)
        apiDeleteSearchHistory(keyId, config).then((response) => {
            if (response.status === 200) {
                setLoading(false)
            } else {
                console.log("get course failed")
                setLoading(false)
            }
        }).catch((error) => {
            console.log("error")
            setLoading(false)
        })
    }

    //on press top tab navigation
    const onPressAllTab = () => {
        setAllActive(true)
        setCourseActive(false)
        setInstructorActive(false)
        setData(subData)
        setInstructorData(subInstructorData)
    }

    const onPressCourseTab = () => {
        setAllActive(false)
        setCourseActive(true)
        setInstructorActive(false)
        setData(subData)
        setInstructorData([])
    }

    const onPressInstructorTab = () => {
        setAllActive(false)
        setCourseActive(false)
        setInstructorActive(true)
        setInstructorData(subInstructorData)
        setData([])
    }

    //render view
    const renderTabSearch = () => {
        return (
            <View>
                <TabSearch allActive={allActive} courseActive={courseActive} instructorActive={instructorActive}
                    onPressAllTab={onPressAllTab} onPressCourseTab={onPressCourseTab} onPressInstructorTab={onPressInstructorTab}
                />
            </View>
        )
    }

    const renderListCourse = () => {
        return (
            <View>
                <TouchableOpacity style={Styles.sectionCoursesHeader}>
                    <Text style={styles.sectionName}>{language.course}</Text>
                    <Text style={styles.sectionNumberOfRes}>{`${numOfCourse} ${numOfCourse > 1 ? language.results : language.result}`}</Text>
                </TouchableOpacity>
                <ListCourses itemData={data} navigation={props.navigation} />
            </View>
        )
    }

    const renderListInstructor = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity style={Styles.sectionCoursesHeader}>
                    <Text style={styles.sectionName}>{language.instructor}</Text>
                    <Text style={styles.sectionNumberOfRes}>{`${numOfInstructor} ${numOfInstructor > 1 ? language.results : language.result}`}</Text>
                </TouchableOpacity>
                <ListInstructors itemData={instructorData} navigation={props.navigation} />
            </View>
        )
    }

    const renderRecentSearchList = () => {
        return (
            <View>
                <RecentSearchesList recentArr={recentKeyArr} getRecentKeywordValue={getRecentKeywordValue} removeRecentKey={removeRecentKey} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.seachBarContainer}>
                <SearchBar
                    placeholder={language.plhTypeHJere}
                    onChangeText={searchText => {
                        setKeyword(searchText)
                    }}
                    inputContainerStyle={styles.inputStyle}
                    containerStyle={styles.searchStyle}
                    value={keyword}
                />
                <TouchableOpacity onPress={() => getCourseData()}>
                    <View style={styles.textSeachContainer}>
                        <Text style={styles.textSeachStyle}>{language.search}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {(keyword == "") && renderRecentSearchList()}
            {(data.length > 0 || instructorData.length > 0) && keyword != "" && renderTabSearch()}
            <View style={styles.searchContainer}>
                <ScrollView>
                    {isLoading && <ActivityIndicator size="large" color={theme.colorLightBlue} />}
                    {data.length > 0 && keyword != "" && renderListCourse()}
                    {instructorData.length > 0 && keyword != "" && renderListInstructor()}
                </ScrollView>
            </View>
        </View>
    )
}


export default Search