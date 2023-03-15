import * as React from "react";
import { Button, Input, H2, YStack, SizableText, XStack } from "tamagui";
// import { supabase } from "../api/config";

const Signup = ({ navigation }: any) => {
   const [emailAddress, setEmailAddress] = React.useState("");
   const [password, setPassword] = React.useState("");

   const handleSubmit = async () => {
      try {
         // let { data, error } = await supabase.auth.signUp({
         //    email: emailAddress,
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
            marginTop="$15"
            paddingHorizontal="$5"
            space="$4"
         >
            <H2 theme={"blue"} ai={"center"}>
               Create an account
            </H2>

            <Input
               onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
               size="$5"
               placeholder={`Email`}
            />
            <Input
               onChangeText={(password) => setPassword(password)}
               size="$5"
               placeholder={`Password`}
            />
            <Button
               onPress={() => navigation.replace("Home")}
               theme="blue"
               size="$5"
            >
               Signup
            </Button>
            <XStack ai={"center"}>
               <SizableText theme="blue" size="$4">
                  Already have an account?{" "}
               </SizableText>
               <SizableText
                  color={"$blue10Light"}
                  onPress={() => navigation.replace("Login")}
                  theme="blue"
                  size="$4"
               >
                  Login
               </SizableText>
            </XStack>
         </YStack>
      </>
   );
};

export default Signup;
