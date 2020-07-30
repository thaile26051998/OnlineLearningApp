import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../../global/style'
import Colors from '../../../../global/color'
import SectionProfileInfoDetail from './SectionProfileInfoDetail/section-profile-info-detail'
import Strings from '../../../../global/string'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionProfileInfo = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        textInsightContainer: {
            marginBottom: 30
        },
        textInsight: {
            color: theme.colorWhite,
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 10
        },
        sectionProfileInfoContainer: {
            flex: 1,
            backgroundColor: theme.colorBackground,
            paddingLeft: 10,
          },
    
    })

    return (
        <View style={styles.sectionProfileInfoContainer}>
            <View style={styles.textInsightContainer}>
                <Text style={styles.textInsight}>{`Activity insights ${props.profiles.insights}s`}</Text>
            </View>
            <SectionProfileInfoDetail title={Strings.totalActiveDay} info={props.profiles.activeDay} dayStreak={`${props.profiles.dayStreak} day streak`} />
            <SectionProfileInfoDetail title={Strings.mostActiveTime} info={props.profiles.mostActiveTime} dayStreak= ""/>
            <SectionProfileInfoDetail title={Strings.mostViewedSub} info={props.profiles.mostViewedSub} dayStreak= ""/>
        </View>
    )
}

export default SectionProfileInfo


