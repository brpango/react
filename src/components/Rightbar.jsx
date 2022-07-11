import { Box, Typography } from "@mui/material";
import React from "react";
//import { Component1 } from "../../src/ReactContext";

const Rightbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "lightcoral",
        display: { xs: "none", sm: "block" },
      }}
      flex={2}
      p={2}
    >
      <Box position={"fixed"}>
        <Typography>Online Friends</Typography>
        {/* <Component1 /> */}
      </Box>
    </Box>
  );
};

export default Rightbar;
