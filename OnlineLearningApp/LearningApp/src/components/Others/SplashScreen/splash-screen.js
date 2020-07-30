import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from './Logo/logo'
import Strings from '../../../global/string';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: 0 }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const newLoadingValue = this.state.loading + 1
            this.setState({loading: newLoadingValue})
        }, 35);
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if(this.state.loading >= 35){
            clearInterval(this.timer)
            this.props.navigation.navigate(Strings.logIn)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
 
    render() {
        return (
            <View style={styles.splashContainer}>
                <Logo />
            </View>
        )
    }

}

export default SplashScreen

const styles = StyleSheet.create({
    splashContainer: ({
        flex: 1,
        backgroundColor: "#151615",
        alignItems: "center",
        justifyContent: "center",
    }),
})
