import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import SectionCourseDetailInfo from './SectionCourseDetailInfo/section-course-detail-info'
import Colors from '../../global/color';
import SectionListVideo from './SectionListVideo/section-list-video';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../provider/theme/theme-provider';

const SectionCoursesDetail = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    let item = props.route.params.item;

    const styles = StyleSheet.create({
        sectionCoursesDetailContainer: {
            flex: 1,
            backgroundColor: theme.colorLightBlack,
            flexDirection: 'column'
        },
        imageRecommendation: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        videoThumbnail: {
            width: '100%',
            height: 250,
            backgroundColor: theme.colorLightGray,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10
        },
    })

    return (
        <ScrollView>
            <View style={styles.sectionCoursesDetailContainer}>
                <ImageBackground style={styles.videoThumbnail} source={{ uri: item.uri }} />
                <SectionCourseDetailInfo item={item} />
                <View style={{ height: '100%' }}>
                    <SectionListVideo videos={item.videos} navigation={props.navigation} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SectionCoursesDetail



