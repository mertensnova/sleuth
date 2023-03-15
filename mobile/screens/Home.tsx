import * as React from "react";
import { Button } from "tamagui";
import { View } from "react-native";
import ListItems from "../components/ListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
// import { Icon } from "@rneui/themed";

const Home = ({ navigation }: any) => {
   React.useLayoutEffect(() => {
      navigation.setOptions({
         title: "Welcome back",
         headerShadowVisible: false,
         headerBackTitleVisible: false,
         headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
         headerRight: () => (
            <View>
               <Button theme={"blue"} circular themeInverse size="$3">
                  {/* <Icon name="sc-search" type="evilicon" color="#517fa4" /> */}
               </Button>
            </View>
            // <SearchInput />
         ),
      });
   });
   return (
      <>
         <SafeAreaView>
            <SearchInput />
            <ListItems />
         </SafeAreaView>
      </>
   );
};

export default Home;
