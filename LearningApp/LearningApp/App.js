import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import SplashScreen from "./src/components/Others/SplashScreen/splash-screen";
import Login from "./src/components/Authentication/Login/login";
import Register from "./src/components/Authentication/Register/register";
import Colors from "./src/global/color";
import 'react-native-gesture-handler';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import { createStackNavigator } from '@react-navigation/stack';
import Strings from "./src/global/string";
import { MainTabNavigation } from "./src/components/MainTabNavigation/main-tab-navigation";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";
import Profile from "./src/components/AccountManagement/Profile/profile";
import { MenuProvider } from 'react-native-popup-menu';
import { ThemeProvier } from "./src/provider/theme/theme-provider";
import { LanguageProvider } from "./src/provider/language/language-provider";
import themes from "./src/provider/theme/theme";
import languages from './src/provider/language/language'
import { AuthenticationProvider } from "./src/provider/authentication-provider";
import VerifyPassword from "./src/components/Authentication/VerifyPassword/verify-password";

export default function App(navigation) {
  const MainStack = createStackNavigator();

  const screenStackOption = (navigation) => {
    return ({
      headerStyle: {
        backgroundColor: Colors.colorBackground
      },
      headerTintColor: Colors.colorWhite,
      headerBackTitleStyle: {
        color: Colors.colorWhite
      }
    })

  }

  const [theme, toggleTheme] = useState(themes.dark)
  const [language, toggleLanguage] = useState(languages.english);
  console.disableYellowBox = true;

  return (
    <LanguageProvider value={{ language, toggleLanguage }}>
      <ThemeProvier value={{ theme, toggleTheme }}>
        <MenuProvider>
          <AuthenticationProvider>
            <NavigationContainer>
              <StatusBar
                hidden={true}
                translucent={true}
              />
              <MainStack.Navigator mode="modal" screenOptions={({ navigation }) => screenStackOption(navigation)} >
                <MainStack.Screen name={Strings.splashScreen} component={SplashScreen} options={{ headerShown: false }} />
                <MainStack.Screen name={Strings.mainTabNavigation} component={MainTabNavigation} options={{ headerShown: false }} />
                <MainStack.Screen name={Strings.logIn} component={Login} options={{ headerShown: false }} />
                <MainStack.Screen name={Strings.forgotPassword} component={ForgetPassword} options={{ headerShown: false }} />
                <MainStack.Screen name={Strings.register} component={Register} options={{ headerShown: false }} />
                <MainStack.Screen name={Strings.verifyPassword} component={VerifyPassword} options={{ headerShown: false }} />
              </MainStack.Navigator>
            </NavigationContainer>
          </AuthenticationProvider>
        </MenuProvider>
      </ThemeProvier>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBackground
  },
});
