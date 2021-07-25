import { Box, CardMedia, Typography } from "@material-ui/core";
import React from "react";

function TheCardHeader({ image, type }) {
  return (
    <>
      <CardMedia component="img" src={image} />
      {type.length > 0 && (
        <Box
          bgcolor="secondary.main"
          color="secondary.contrastText"
          top={0}
          right={0}
          position="absolute"
          zIndex="modal"
          width="auto"
          p={1}
        >
          <Typography align="right" variant="subtitle2">
            {type}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default TheCardHeader;
