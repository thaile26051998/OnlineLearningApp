import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../../../../../provider/theme/theme-provider';
import { apiGetCategoryDetail } from '../../../../../services/subject-services'
import ListCourses from '../../../../ListCourses/list-courses';

const SectionSkilsDetail = (props) => {
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

  const id = props.route.params.item.id;
  let idArr = [];
  idArr.push(id)

  useEffect(() => {
    apiGetCategoryDetail(idArr).then((response) => {
      if (response.status === 200) {
        setData(response.data.payload.rows)
        setLoading(false)
        console.log(response.data.payload.rows)
      } else {
        console.log("get course failed")
      }
    }).catch((error) => {
      console.log("error")
    })
  }, [])

  return (
    <View style={styles.sectionCategoriesDetailContainer}>
      <ScrollView>
        {isLoading && <ActivityIndicator size="large" color={theme.titleText} />}
        <ListCourses itemData={data} navigation={props.navigation} />
      </ScrollView>
    </View>
  )
}

export default SectionSkilsDetail


