import * as React from "react";
import { Button, Input, H2, YStack, SizableText, XStack, H3 } from "tamagui";
// import { Input } from "react-native";
// import { supabase } from "../api/config";
//
const Login = ({ navigation }: any) => {
   const [password, setPassword] = React.useState("");
   const [email, setEmail] = React.useState("");

   const handleSubmit = async () => {
      try {
         // let { data, error } = await supabase.auth.signInWithPassword({
         //    email: email,
         //    password: password,
         // });
         // console.log("====================================");
         // console.log(data, error);
         // console.log("====================================");
      } catch (err: any) {
         console.log("Error:> " + (err.errors ? err.errors[0].message : err));
      }
   };

   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   // React.useEffect(() => {
   //    const fetchData = async () => {
   //       const { data } = await supabase.auth.getSession();
   //       if (data) {
   //          navigation.replace("Home");
   //       }
   //    };
   //    // call the function
   //    fetchData()
   //       // make sure to catch any error
   //       .catch(console.error);
   // }, []);

   return (
      <>
         <YStack
            theme={"blue"}
            justifyContent="center"
            marginTop="$15"
            paddingHorizontal="$5"
            flex={1}
            backgroundColor="$gray1"
            space
         >
            <H3 theme={"blue"} ai={"center"}>
               Login
            </H3>
            <Input
               keyboardType="email-address"
               onChangeText={(email) => setEmail(email)}
               size="$5"
               placeholder={`Email`}
            />

            <Input
               secureTextEntry={true}
               onChangeText={(password) => setPassword(password)}
               size="$5"
               placeholder={`Password`}
            />
            <Button onPress={handleSubmit} theme="blue" size="$5">
               Login
            </Button>
            <XStack ai={"center"}>
               <SizableText theme="blue" size="$4">
                  Dont have an account?{" "}
               </SizableText>
               <SizableText
                  color={"$blue10Light"}
                  onPress={() => navigation.replace("Register")}
                  theme="blue"
                  size="$4"
               >
                  Sign up
               </SizableText>
            </XStack>
         </YStack>
      </>
   );
};

export default Login;
