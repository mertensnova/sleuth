import * as React from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import Signup from "./screens/Signup";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
   const colorScheme = useColorScheme();

   const [loaded] = useFonts({
      Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

      InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
   });
   if (!loaded) {
      return null;
   }
   return (
      <TamaguiProvider config={config}>
         <Theme name={"light"}>
            <NavigationContainer>
               <SafeAreaProvider>
                  <Stack.Navigator
                     screenOptions={{
                        headerShown: false,
                     }}
                  >
                     <Stack.Screen name="Login" component={Login} />
                     <Stack.Screen name="Register" component={Signup} />
                  </Stack.Navigator>
               </SafeAreaProvider>
            </NavigationContainer>
         </Theme>
      </TamaguiProvider>
   );
}
