import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';
import ListCourses from '../../../../ListCourses/list-courses'
import { apiGetCategoryDetail } from '../../../../../services/subject-services'

const SectionCategoriesDetail = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const styles = StyleSheet.create({
        sectionCategoriesDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            padding: 10
        },
    })

    useEffect(() => {
        apiGetCategoryDetail(props.route.params.item.id).then((response) => {
            if (response.status === 200) {
                setData(response.data.rows)
                setLoading(false)
                console.log(response.data.rows)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("error")
        })
    })

    let item = props.route.params.item;

    const renderBody = () => {
        return (
            <ScrollView>
                {isLoading && <ActivityIndicator size="large" color={theme.colorLightBlue} />}
                <ListCourses itemData={data} navigation={props.navigation} />
            </ScrollView>
        )
    }

    return (
        <View style={styles.sectionCategoriesDetailContainer}>
            {isLoading && <ActivityIndicator styles={styles.indicatorStyle} size="small" color={theme.colorLightBlue} />}
            {!isLoading && renderBody()}
        </View>
    )
}

export default SectionCategoriesDetail




