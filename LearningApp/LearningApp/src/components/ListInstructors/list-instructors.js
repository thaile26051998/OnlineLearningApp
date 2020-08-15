import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../../provider/theme/theme-provider';
import ListInstructorItem from './list-instructor-item/list-instructor-item';

const ListInstructors = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        listInstructorsContainer: {
            backgroundColor: theme.colorBackground,
        }
    })

    const renderSeparatorView = () => {
        return (
            <View style={{
                height: 0.5,
                width: "100%",
                opacity: 0.5,
                backgroundColor: theme.colorLightGray,
            }}
            />
        );
    };

    return (
        <View style={styles.listInstructorsContainer}>
            <FlatList
                data={props.itemData}
                ItemSeparatorComponent={renderSeparatorView}
                renderItem={({ item }) => <ListInstructorItem item={item} navigation={props.navigation} />}
            />
        </View>
    )
}

export default ListInstructors

const styles = StyleSheet.create({})


