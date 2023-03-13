import * as React from "react";
import { Button, Input, H2, YStack, SizableText, XStack } from "tamagui";

const Login = ({ navigation }: any) => {
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
               Login to your account
            </H2>
            <Input
               onChangeText={(username) => setUsername(username)}
               size="$5"
               placeholder={`Username`}
            />

            <Input
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
