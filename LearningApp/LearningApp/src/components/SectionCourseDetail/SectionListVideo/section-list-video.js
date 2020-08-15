import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, SectionList } from 'react-native'
import Colors from '../../../global/color';
import SectionListVideoItem from './section-list-video-item';
import { ThemeContext } from '../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../provider/language/language-provider";
import { AuthenticationContext } from "../../../provider/authentication-provider"
import { apiGetCourseDetailInfo } from '../../../services/course-services';
import SectionVideoItem from './section-video-item';

const SectionListVideo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 10,
            flex: 1,
        },
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
        <View style={styles.container}>
            <FlatList
                data={props.lesson}
                ItemSeparatorComponent={renderSeparatorView}
                renderItem={({ item }) => <SectionVideoItem item={item} navigation={props.navigation} />}
            />
        </View>
    )
}

export default SectionListVideo


