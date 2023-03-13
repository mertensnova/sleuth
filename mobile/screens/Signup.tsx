import * as React from "react";
import { Button, Input, H2, YStack, Text, SizableText, XStack } from "tamagui";
// import { useSignIn } from "@clerk/clerk-expo";

const Signup = ({ navigation }: any) => {
   // React.useLayoutEffect(() => {
   //    navigation.setOptions({
   //       headerShow:"n"
   //    });
   // });
   const [emailAddress, setEmailAddress] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [username, setUsername] = React.useState("");

   const handleSubmit = async () => {
      try {
         // await setSession(completeSignIn.createdSessionId);
      } catch (err: any) {
         console.log("Error:> " + (err.errors ? err.errors[0].message : err));
      }
   };

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
               onChangeText={(username) => setUsername(username)}
               size="$5"
               placeholder={`Username`}
            />
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
