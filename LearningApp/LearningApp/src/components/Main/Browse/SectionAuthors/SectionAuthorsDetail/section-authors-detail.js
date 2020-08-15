import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import SectionAuthorsInfo from './SectionAuthorsInfo/section-authors-info'
import Styles from '../../../../../global/style'
import ListCourses from '../../../../ListCourses/list-courses'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';
import { apiGetInstructorDetail } from '../../../../../services/author-service'
import Strings from '../../../../../global/string'
import Colors from '../../../../../global/color'

const SectionAuthorsDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

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
        indicatorStyle: {
            flex: 1,
            backgroundColor: Colors.colorBackground,
            alignItems: "center",
            justifyContent: "center",
        }
    })

    let item = props.route.params.item;
    const id = item.id;

    useEffect(() => {
        //get instructor detail
        apiGetInstructorDetail(id).then((response) => {
            if (response.status === 200) {
                setData(response.data.payload)
                setLoading(false)
                console.log("get instructor success")
            } else {
                console.log("get instructor failed")
            }
        }).catch((error) => {
            console.log("get instructor failed")
        })
    },[])

    const renderBody = () => {
        return (
            <View style={styles.sectionAuthorDetailContainer}>
                <ScrollView>
                    <SectionAuthorsInfo author={data} />
                    <View style={Styles.sectionCoursesHeader}>
                        <Text style={[styles.textMedium, { marginVertical: 30 }]}>{data.courses != null ? Strings.course : Strings.courseUpdating}</Text>
                    </View>
                    <ListCourses itemData={data.courses} navigation={props.navigation} />
                </ScrollView>
            </View>
        )
    }


    return (
        <View style={styles.sectionAuthorDetailContainer}>
            {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
            {!isLoading && renderBody()}
        </View>
    )
}

export default SectionAuthorsDetail
