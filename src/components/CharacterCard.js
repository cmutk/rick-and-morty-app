import React from "react";
import { Card, CardActionArea } from "@material-ui/core";
import TheCardHeader from "./TheCardHeader";
import TheCardContent from "./TheCardContent";
function CharacterCard({ char, handleOnClick }) {
  return (
    <Card style={{ height: "100%" }}>
      <CardActionArea onClick={() => handleOnClick("paper", char)}>
        <TheCardHeader image={char.image} type={char.type}></TheCardHeader>
        <TheCardContent name={char.name}></TheCardContent>
      </CardActionArea>
    </Card>
  );
}

export default CharacterCard;
