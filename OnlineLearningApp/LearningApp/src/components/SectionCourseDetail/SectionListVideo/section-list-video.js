import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import Colors from '../../../global/color';
import SectionListVideoItem from './section-list-video-item';
import { ThemeContext } from '../../../provider/theme/theme-provider';

const SectionListVideo = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionListVideoContainer: {
            backgroundColor: theme.colorBackground,
            height: '100%',
            flex: 1
        }
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
        <View style = {styles.sectionListVideoContainer}>
            <FlatList
                data={props.videos}
                ItemSeparatorComponent={renderSeparatorView}
                renderItem={({ item }) => <SectionListVideoItem item={item} navigation={props.navigation} />}
            />
        </View>
    )
}

export default SectionListVideo


