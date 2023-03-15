import * as React from "react";
import { Separator, YGroup } from "tamagui";
import { ScrollView } from "react-native";
import Item from "./Item";

const ListItems = () => {
   return (
      <>
         <YGroup bordered size="$10" separator={<Separator />}>
            <ScrollView>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
               <YGroup.Item>
                  <Item />
               </YGroup.Item>
            </ScrollView>
         </YGroup>
      </>
   );
};

export default ListItems;
