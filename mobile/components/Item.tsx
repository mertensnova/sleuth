import React from "react";
import { Card, XStack, Avatar, YStack, H6, Paragraph } from "tamagui";

const Item = ({ data }: any) => {
   return (
      <>
         <Card hoverTheme pressTheme>
            <XStack>
               <Card.Header padded>
                  <Avatar circular size="$5">
                     <Avatar.Image src={data.avatar} />
                     <Avatar.Fallback bc="red" />
                  </Avatar>
               </Card.Header>
               <Card.Footer padded>
                  <YStack>
                     <H6>
                        {data.first_name}
                        {data.last_time}
                     </H6>
                     <Paragraph theme="alt2">{data.timezone}</Paragraph>
                  </YStack>
               </Card.Footer>
            </XStack>
         </Card>
      </>
   );
};

export default Item;
