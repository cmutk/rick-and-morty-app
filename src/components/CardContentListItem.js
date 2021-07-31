import { Grid, Typography } from "@material-ui/core";
import React from "react";
function CardContentListItem(props) {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={2}>
        {props.title1}
      </Grid>
      <Grid item xs={10}>
        <Typography
          noWrap
          style={{ fontWeight: 600, textAlign: "right" }}
          alignRight
        >
          {props.title2}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CardContentListItem;
