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
      <Grid item xs={4}>
        {props.title1}
      </Grid>
      <Grid item xs={8}>
        <Typography style={{ fontWeight: 600, textAlign: "right" }} alignRight>
          {props.title2}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CardContentListItem;
