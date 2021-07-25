import { Grid } from "@material-ui/core";
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
      <Grid item>{props.title1}</Grid>
      <Grid item style={{ fontWeight: 600 }}>
        {props.title2}
      </Grid>
    </Grid>
  );
}

export default CardContentListItem;
