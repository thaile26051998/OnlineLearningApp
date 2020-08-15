import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../../../../global/style'
import Colors from '../../../../global/color'
import SectionProfileInfoDetail from './SectionProfileInfoDetail/section-profile-info-detail'
import Strings from '../../../../global/string'
import { ThemeContext } from '../../../../provider/theme/theme-provider';

const SectionProfileInfo = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        sectionProfileInfoContainer: {
            backgroundColor: theme.colorBackground,
            justifyContent: "center",
            alignItems: "center",
        },
    })

    return (
        <View style={styles.sectionProfileInfoContainer}>
            <SectionProfileInfoDetail type = "default" pld = "" title={Strings.email} info={props.profile.email} editable={false} changeName = {false} onChangeName={props.onChangeName} />
            <SectionProfileInfoDetail type = "default" pld = {Strings.plhEnterName} title={Strings.name} info={props.profile.name} editable={true} changeName = {true} onChangeName={props.onChangeName} />
            <SectionProfileInfoDetail type = "number-pad" pld = {Strings.plhEnterPhone} title={Strings.phone} info={props.profile.phone} editable={true} changeName = {false} onChangePhone={props.onChangePhone} />
        </View>
    )
}

export default SectionProfileInfo


