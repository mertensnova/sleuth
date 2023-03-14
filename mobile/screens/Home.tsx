import * as React from "react";
import { Avatar } from "tamagui";
import ListItems from "../components/ListItems";

const Home = ({ navigation }: any) => {
   React.useLayoutEffect(() => {
      navigation.setOptions({
         title: "Amr Ashebo",
         headerLeft: () => {
            <Avatar circular>
               <Avatar.Image
                  accessibilityLabel="Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
               />
               <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>;
         },
      });
   });
   return <>{/* <ListItems /> */}</>;
};

export default Home;
