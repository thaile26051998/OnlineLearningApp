import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../../../../../../global/style'
import Strings from '../../../../../../global/string'
import Colors from '../../../../../../global/color'
import { ThemeContext } from '../../../../../../provider/theme/theme-provider';

const SectionPathProgress = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    textLarge: {
      color: theme.colorWhite,
      fontWeight: "bold",
      fontSize: 22,
      marginTop: 10
    },
  })

  const renderSeparatorView = () => {
    return (
      <View style={{
        height: 4,
        width: "50%",
        opacity: 0.5,
        backgroundColor: theme.colorLightGray,
        marginTop: 5
      }}
      />
    );
  };


  return (
    <View style={Styles.sectionProgressContainer}>
      <Text style={styles.textLarge} >{`${Strings.progress} ${props.progress}%`}</Text>
      {renderSeparatorView()}
    </View>
  )
}

export default SectionPathProgress




