import React, {useContext} from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import SectionCoursesItemInfo from '../../../components/Others/Component/SectionCoursesItemInfo/section-courses-item-info'
import Styles from '../../../global/style'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../global/color';
import Strings from '../../../global/string';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListCoursesItemInfo from './list-courses-item-info';
import { ThemeContext } from '../../../provider/theme/theme-provider';

const ListCoursesItem = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        optionContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: "space-between",
        }
    })

    const onPressListCoursesItem = () => {
        props.navigation.push(Strings.courseDetail, { item: props.item })
    }

    return (
        <TouchableOpacity onPress={onPressListCoursesItem}>
            <View style={styles.container}>
                <View style={Styles.listCoursesItemContainer}>
                    <ImageBackground style={Styles.listCoursesImage} source={{ uri: props.item.courseImage != null ? props.item.courseImage : props.item.imageUrl }} />
                    <ListCoursesItemInfo item={props.item} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListCoursesItem



