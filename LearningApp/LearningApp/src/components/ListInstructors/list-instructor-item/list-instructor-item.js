import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ThemeContext } from '../../../provider/theme/theme-provider';
import Strings from '../../../global/string';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListInstructorItem = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        imageInstructor: {
            height: 50,
            width: 50,
            borderRadius: 400 / 2,
            marginEnd: 10
        },
        listInstructorItemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            marginBottom: 10,
            marginTop: 10
        },
        textName: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colorWhite,
        },
        textContent: {
            fontSize: 14,
            color: theme.colorLightGray,
        },
    })

    const goToInstructorDetail = () => {
        props.navigation.navigate(Strings.authors, {item: props.item})
    }

    return (
        <TouchableOpacity onPress = {goToInstructorDetail}>
            <View style={styles.listInstructorItemContainer}>
                <View >
                    <Image style={styles.imageInstructor} source={{ uri: props.item.avatar }} />
                </View>
                <View>
                    <Text style={styles.textName}>{props.item.name}</Text>
                    <Text style={styles.textContent}>{`${props.item.numcourses} ${props.item.numcourses != 0 ? Strings.courseMany : Strings.courseSingle}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListInstructorItem

