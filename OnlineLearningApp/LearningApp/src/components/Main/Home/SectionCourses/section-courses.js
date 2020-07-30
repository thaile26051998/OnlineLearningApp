import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionCoursesHeader from "../../../Others/Component/SectionCoursesHeader/section-course-header";
import Styles from "../../../../global/style";
import SectionCoursesItem from "./SectionCoursesItem/section-courses-item";
import Strings from "../../../../global/string";

const SectionCourses = (props) => {
  const courses = props.courses;

  const renderListItems = () => {
    return courses.data.map((item) => <SectionCoursesItem navigation = {props.navigation} item={item} />);
  };

  return (
    <View style={Styles.sectionCoursesContainer}>
      <SectionCoursesHeader title={courses.title} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListItems()}
      </ScrollView>
    </View>
  );
};

export default SectionCourses;
