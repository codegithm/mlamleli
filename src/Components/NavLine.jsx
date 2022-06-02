import React from "react";
import { Box, Stack } from "@mui/material";
function NavLine() {
  return (
    <Stack direction='row'>
      <Box
        flex={1}
        sx={{
          backgroundColor: "#f2d02f",
          height: 32,
        }}
      ></Box>
      <Box
        flex={1}
        sx={{
          backgroundColor: "#8f6818",
          height: 32,
        }}
      ></Box>
      <Box
        flex={1}
        sx={{
          backgroundColor: "#10100a",
          height: 32,
        }}
      ></Box>
      <Box
        flex={1}
        sx={{
          backgroundColor: "#423b3d",
          height: 32,
        }}
      ></Box>
    </Stack>
  );
}

export default NavLine;
