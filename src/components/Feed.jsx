import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box sx={{ backgroundColor: "yellow" }} flex={4} p={2}>
      <Post title="Bakari Pango" subheader="January 20, 2022" />
      <Post title="Somoe Mkwachu" subheader="February 21, 2022" />
      <Post title="Fatma Bakari" subheader="March 22, 2022" />
      <Post title="Ummu Rashid" subheader="May 23, 2022" />
    </Box>
  );
};

export default Feed;
