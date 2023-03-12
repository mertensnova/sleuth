import { Box, Avatar, Button } from "@mui/material";
import React from "react";

export const Profile = () => {
   return (
      <>
         <Box
            sx={{
               width: "100%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               //    padding: "10px",
               flexDirection: "column",
            }}
         >
            <Avatar
               alt="Remy Sharp"
               src="/static/images/avatar/1.jpg"
               sx={{ width: 56, height: 56, marginY: "20px" }}
            />
            <Button
               sx={{ marginY: "10px" }}
               variant="contained"
               color="success"
            >
               Success
            </Button>
         </Box>
      </>
   );
};
