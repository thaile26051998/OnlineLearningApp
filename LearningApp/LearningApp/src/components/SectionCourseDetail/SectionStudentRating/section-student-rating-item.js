import React, { useContext } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Styles from '../../../global/style'
import Constants from '../../../global/constant'
import Strings from '../../../global/string'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import StarRating from 'react-native-star-rating';

const SectionStudentRatingItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        avatar: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginEnd: 10,
            width: "20%"
        },
        imageStudent: {
            height: 70,
            width: 70,
            borderRadius: 400 / 2,
        },
        sectionStudentRatingItemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 90,
            marginBottom: 10,
            marginStart: 10,
            marginTop: 20
        },
        sectionStudentRatingItemRightContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        avtContainer: {
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        sectionName: {
            color: theme.colorWhite,
            fontSize: 14,
            marginTop: 5
        },
        textContent: {
            fontSize: 16,
            color: theme.colorWhite,
        },
        textDate: {
            marginStart: 5,
            fontSize: 13,
            color: theme.colorWhite,
        },
        studentNameContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        contentContainer:{
            width: 300
        }
    })

    const date = new Date(props.item.createdAt);

    return (
        <View style={styles.sectionStudentRatingItemContainer}>
            <View style={styles.avatar} >
                <Image style={styles.imageStudent} source={{ uri: props.item.user.avatar }} />
                <Text numberOfLines={Constants.numberOfLineTwo} style={styles.sectionName}>{props.item.user.name}</Text>
            </View>
            <View>
                <View style={styles.sectionStudentRatingItemRightContainer}>
                    <StarRating
                        disabled={false}
                        starSize={17}
                        maxStars={5}
                        rating={props.item.averagePoint}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'yellow'}
                    />
                    <View>
                        <Text style={styles.textDate}>{date.toLocaleString()}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text numberOfLines={Constants.numberOfLineThree} style={styles.textContent}>{props.item.content}</Text>
                </View>
            </View>
        </View>
    )
}

export default SectionStudentRatingItem


