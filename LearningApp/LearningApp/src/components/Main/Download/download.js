import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import String from "../../../global/string"
import Styles from '../../../global/style'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../global/color';

const Download = () => {
    return (
        <View style = {Styles.downloadContainer}>   
            <Ionicons name="md-cloud-download" size={100} color= {Colors.colorLightGray}/>
            <Text style = {Styles.textLarge}>{String.noDownload}</Text>
            <Text style = {Styles.sectionCoursesName}>{String.noDownloadNoti}</Text>
        </View>
    )
}

export default Download

const styles = StyleSheet.create({})
