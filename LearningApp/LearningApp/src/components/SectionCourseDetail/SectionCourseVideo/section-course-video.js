import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window')

const SectionCourseVideo = (props) => {

    const styles = StyleSheet.create({
        backgroundVideo: {
            width: width,
            height: 250
        },
        videoContainer: {
            flex: 1,
            marginBottom: 20
        }
    });

    return (
        <View style={styles.videoContainer}>
            <Video
                source={{ uri: props.url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={Video.RESIZE_MODE_CONTAIN}
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={styles.backgroundVideo}
            />
        </View>
    );
};

export default SectionCourseVideo;
