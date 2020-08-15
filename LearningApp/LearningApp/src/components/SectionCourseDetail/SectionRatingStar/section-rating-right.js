import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressBarComponent from '../../Others/Component/ProgressBarComponent/progress-bar-component'
import { ThemeContext } from '../../../provider/theme/theme-provider';

const SectionRatingRight = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionRatingRightContainer: {
            marginEnd: 10,
            justifyContent: 'space-around',
            height: 150
        }
    })

    return (
        <View style = {styles.sectionRatingRightContainer}>
            <ProgressBarComponent progress={props.stars[4]} number ={5}/>
            <ProgressBarComponent progress={props.stars[3]} number ={4}/>
            <ProgressBarComponent progress={props.stars[2]} number ={3}/>
            <ProgressBarComponent progress={props.stars[1]} number ={2}/>
            <ProgressBarComponent progress={props.stars[0]} number ={1}/>
        </View>
    )
}

export default SectionRatingRight


