import React, {useContext} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import SectionRecommendationItem from '../Main/Browse/SectionRecommendation/SectionRecommendationItem/section-recommendation-item';
import Styles from '../../global/style';
import ListCoursesItem from './ListCoursesItem/list-courses-item';
import Colors from '../../global/color';
import { ThemeContext } from '../../provider/theme/theme-provider';

const ListCourses = (props) => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const styles = StyleSheet.create({
  
  })
  
    const renderSeparatorView = () => {
        return (
          <View style={{
              height: 0.5, 
              width: "100%",
              opacity: 0.5,
              backgroundColor: theme.colorLightGray,
              marginTop: 5
            }}
          />
        );
      };

    return (
        <View >
            <FlatList
                data={props.courses}
                ItemSeparatorComponent ={renderSeparatorView}
                renderItem={({ item }) => <ListCoursesItem item={item} navigation = {props.navigation} />}
            />
        </View>
    )
}

export default ListCourses


