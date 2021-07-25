import React, { useState } from "react";
import {
  Grid,
  Typography,
  CardActionArea,
  Divider,
  Collapse,
  Link,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import CardContentListItem from "./CardContentListItem.js";
function CardContentDetails({ char, episodes }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography variant="body1" component="div">
        <Grid container direction="column" spacing={2}>
          <CardContentListItem title1="Species" title2={char.species} />
          <Divider />
          <CardContentListItem title1="Status" title2={char.status} />
          <Divider />
          <CardContentListItem title1="Gender" title2={char.gender} />
          <Divider />
          <Grid container item direction="row">
            <CardActionArea>
              <Link href={char.location.url} variant="body1" color="inherit">
                <CardContentListItem
                  title1="Origin"
                  title2={char.origin.name}
                />
              </Link>
            </CardActionArea>
          </Grid>
          <Divider />
          <Grid container item direction="row">
            <CardActionArea>
              <Link href={char.location.url} variant="body1" color="inherit">
                <CardContentListItem
                  title1="Location"
                  title2={char.location.name}
                />
              </Link>
            </CardActionArea>
          </Grid>
          <Divider />
          <Grid container item direction="row">
            <CardActionArea
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Typography variant="body1" component="div">
                <Grid
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>Episodes:</Grid>
                  <Grid item style={{ fontWeight: 600 }}>
                    <Grid item container alignItems="center">
                      {char.episode.length}
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </Grid>
                  </Grid>
                </Grid>
              </Typography>
            </CardActionArea>
          </Grid>
          <Divider />
          <Grid container item direction="row" justifyContent="space-between">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Typography variant="body1" component="div" p={2}>
                {episodes &&
                  episodes.map((episode) => {
                    return (
                      <CardContentListItem
                        key={"ep" + episode.id}
                        title1={episode.episode}
                        title2={episode.name}
                      />
                    );
                  })}
              </Typography>
            </Collapse>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}

export default CardContentDetails;
