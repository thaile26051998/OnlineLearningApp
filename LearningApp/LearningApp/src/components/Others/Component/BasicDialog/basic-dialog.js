import { Alert } from 'react-native'

const BasicDialog = (props) => {
    return(
    Alert.alert(
        "",
        props.content,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    )
}

export default BasicDialog
