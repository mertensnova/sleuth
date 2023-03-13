import * as React from "react";
import { Avatar, ListItem, Separator, XStack, YGroup } from "tamagui";

const ListItems = () => {
   return (
      <>
         <YGroup marginTop="$10" size={"$20"}>
            <YGroup.Item>
               <Avatar circular>
                  <Avatar.Image
                     accessibilityLabel="Cam"
                     src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
               </Avatar>
            </YGroup.Item>
         </YGroup>
      </>
   );
};

export default ListItems;
