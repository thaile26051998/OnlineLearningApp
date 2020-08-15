import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../global/style'
import { ThemeContext } from '../../../../provider/theme/theme-provider';
import { LanguageContext } from "../../../../provider/language/language-provider";
import SectionProfileInfoDetail from '../../../AccountManagement/Profile/SectionProfileInfo/SectionProfileInfoDetail/section-profile-info-detail';
import Strings from '../../../../global/string';
import CourseSectionInfo from '../CourseSectionInfo/course-section-info';

const SectionDetailInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const styles = StyleSheet.create({
        textSmall: {
            fontSize: 16,
            color: theme.colorWhite,
        },
    });

    let learnWhat = "";
    let requirement = "";
    let learnArr = [];
    let requireArr = [];
    learnArr = props.item.learnWhat;
    requireArr = props.item.requirement;

    let i = 0;

    for (i in learnArr) {
        learnWhat += learnArr[i]
        if (i < learnArr.length - 1) {
            learnWhat += "\n"
        }
    }
    i = 0;

    for (i in requireArr) {
        requirement += requireArr[i]
        if (i < requireArr.length - 1) {
            requireArr += "\n"
        }
    }


    return (
        <View style={Styles.detailInfoContainer}>
            <CourseSectionInfo title={language.learnWhat} info={`${learnWhat}`}/>
            <CourseSectionInfo title={language.requirement} info={`${requirement}`} />
            <CourseSectionInfo title={language.description} info={props.item.description} />
        </View>
    )
}

export default SectionDetailInfo

