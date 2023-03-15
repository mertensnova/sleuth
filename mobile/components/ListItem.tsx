import * as React from "react";
import {
   Avatar,
   Card,
   H6,
   Paragraph,
   Separator,
   XStack,
   YGroup,
   YStack,
} from "tamagui";
import { ScrollView } from "react-native";
import Item from "./Item";
import { mock } from "../MOCK_DATA";
import { FlatList } from "react-native";

const ListItems = () => {
   console.log(mock);

   const renderItem = ({ data }: any) => {
      // console.log(data[0]?.avatar);
      console.log(data);

      return (
         <Card hoverTheme pressTheme>
            <XStack>
               <Card.Header padded>
                  <Avatar circular size="$5">
                     <Avatar.Image src={data?.avatar} />
                     <Avatar.Fallback bc="red" />
                  </Avatar>
               </Card.Header>
               <Card.Footer padded>
                  <YStack>
                     <H6>
                        {data?.first_name}
                        {data?.last_time}
                     </H6>
                     <Paragraph theme="alt2">{data?.timezone}</Paragraph>
                  </YStack>
               </Card.Footer>
            </XStack>
         </Card>
      );
   };
   return (
      <>
         <YGroup bordered size="$10" separator={<Separator />}>
            <FlatList
               // horizontal={true}
               data={mock}
               renderItem={renderItem}
               keyExtractor={(item) => item?.first_name}
            />
         </YGroup>
      </>
   );
};

export default ListItems;
