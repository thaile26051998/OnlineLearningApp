import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SectionCoursesHeader from "../../../Others/Component/SectionCoursesHeader/section-course-header";
import SectionPathItem from './SectionPathItem/section-path-item';
import Styles from '../../../../global/style';

const SectionPath = (props) => {
    const paths = props.paths;

    const renderListItems = () => {
        return paths.data.map((item) => <SectionPathItem navigation={props.navigation} item={item} />)
    }

    return (
        <View>
            <SectionCoursesHeader title={paths.title} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.scrollViewContainer}>
                {renderListItems()}
            </ScrollView>
        </View>
    )
}

export default SectionPath;
