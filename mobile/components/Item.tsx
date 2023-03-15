import React from "react";
import { Card, XStack, Avatar, YStack, H6, Paragraph } from "tamagui";

const Item = () => {
   return (
      <>
         <Card hoverTheme pressTheme>
            <XStack>
               <Card.Header padded>
                  <Avatar circular size="$5">
                     <Avatar.Image src="http://placekitten.com/200/300" />
                     <Avatar.Fallback bc="red" />
                  </Avatar>
               </Card.Header>
               <Card.Footer padded>
                  <YStack>
                     <H6>Sony A7IV</H6>
                     <Paragraph theme="alt2">Now available</Paragraph>
                  </YStack>
               </Card.Footer>
            </XStack>
         </Card>
      </>
   );
};

export default Item;
