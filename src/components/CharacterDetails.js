import React from "react";
import CardContentDetails from "./CardContentDetails";
import useGetFeaturedEpisodes from "../hooks/useGetFeaturedEpisodes,";
import TheCardContent from "./TheCardContent";
import TheCardHeader from "./TheCardHeader";

function CharacterDetails({ char }) {
  const episodeIds = char.episode.map((url) => {
    const urlStringToCut = "https://rickandmortyapi.com/api/episode/";
    return Number(url.replace(urlStringToCut, ""));
  });
  const endpoint = `episode/${episodeIds}`;
  const { loading, error, items } = useGetFeaturedEpisodes(endpoint);
  const episodes = items.length > 0 ? [...items] : [items];
  console.log(loading, error, episodes);
  return (
    <>
      <TheCardHeader image={char.image} type={char.type}></TheCardHeader>
      <TheCardContent name={char.name}>
        <CardContentDetails
          char={char}
          episodes={episodes}
        ></CardContentDetails>
      </TheCardContent>
    </>
  );
}

export default CharacterDetails;
