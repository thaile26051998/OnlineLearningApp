import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SectionCategoriesItem from './SectionCategoriesItem/section-categories-item';
import Styles from '../../../../global/style';

const SectionCategories = (props) => {
    const categories = props.categories;

    const renderListItems = () => {
        return categories.map((item) => <SectionCategoriesItem item={item} navigation={props.navigation} />)
    }

    return (
        <View style={Styles.sectionContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.scrollViewContainer}>
                {renderListItems()}
            </ScrollView>
        </View>
    )
}

export default SectionCategories;
