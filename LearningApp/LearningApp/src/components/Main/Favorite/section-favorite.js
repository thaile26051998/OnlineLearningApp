import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import favoriteCourses from '../../../global/data/favorite-data'
import ListCourses from '../../ListCourses/list-courses'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { apiGetFavoriteCourses } from '../../../services/user-services';
import { AuthenticationContext } from "../../../provider/authentication-provider";

const SectionFavorite = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const authContext = useContext(AuthenticationContext);
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const styles = StyleSheet.create({
        sectionFavoriteContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            padding: 10
        }
    })

    useEffect(() => {
        apiGetFavoriteCourses(config).then((response) => {
            if (response.status === 200) {
                setData(response.data.payload)
                setLoading(false)
                console.log(response.data.payload)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })
    })

    return (
        <View style={styles.sectionFavoriteContainer}>
            {isLoading && <ActivityIndicator size="large" color={theme.colorLightBlue} />}
            <ListCourses itemData={data} navigation={props.navigation} />
        </View>
    )
};

export default SectionFavorite


