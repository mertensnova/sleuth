import React from "react";
import { XStack, Input, Button } from "tamagui";

const SearchInput = () => {
   return (
      <>
         <XStack ai="center">
            <Input f={1} placeholder="Search..." />
            <Button theme={"blue"}>Go</Button>
         </XStack>
      </>
   );
};

export default SearchInput;
