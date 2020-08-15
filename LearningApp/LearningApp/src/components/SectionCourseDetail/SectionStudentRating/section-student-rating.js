import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import SectionStudentRatingItem from './section-student-rating-item'
import { AuthenticationContext } from "../../../provider/authentication-provider"
import { apiGetCourseDetailInfo } from '../../../services/course-services'

const SectionStudentRating = (props) => {
    const authContext = useContext(AuthenticationContext);
    const [ratingList, setRatingList] = useState([])
    const token = authContext.state.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const id = authContext.state.userInfo.id;
    const courseId = props.courseId;

    useEffect(() => {
        //get course detail
        apiGetCourseDetailInfo(courseId, id).then((response) => {
            if (response.status === 200) {
                setRatingList(response.data.payload.ratings.ratingList)
            } else {
                console.log("get course failed")
            }
        }).catch((error) => {
            console.log("get course failed")
        })
    },)

    return (
    
        < View >
            <FlatList
                data={ratingList}
                renderItem={({ item }) => <SectionStudentRatingItem item={item} navigation={props.navigation} />}
            />
        </View >
    )
}

export default SectionStudentRating

const styles = StyleSheet.create({})
