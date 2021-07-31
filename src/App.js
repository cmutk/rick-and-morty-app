import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
} from "@material-ui/core";
import React, { useState, useRef, useCallback } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterDetails from "./components/CharacterDetails";
import useGetAllCharacters from "./hooks/useGetAllCharacters";

function App() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [dialogContent, setDialogContent] = useState({});
  const handleClickOpen = (scrollType, char) => {
    setOpen(true);
    setScroll(scrollType);
    setDialogContent(char);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const [query] = useState("character");
  const [pageNumber, setPageNumber] = useState(1);
  const {
    items: characters,
    hasMore,
    loading,
  } = useGetAllCharacters(query, pageNumber);
  const observer = useRef();
  const lastItemElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore, pageNumber]
  );

  return (
    <div className="App">
      <Backdrop style={{ zIndex: 400 }} open={loading}>
        <CircularProgress></CircularProgress>
      </Backdrop>
      <Dialog
        open={open}
        onClose={handleClickClose}
        scroll={scroll}
        content={dialogContent}
      >
        {dialogContent && (
          <DialogContent dividers={scroll === "paper"}>
            <CharacterDetails char={dialogContent}></CharacterDetails>
          </DialogContent>
        )}
      </Dialog>
      <Grid container alignItems="stretch" spacing={2}>
        {characters &&
          characters.map((character, index) => {
            return (
              <Grid
                key={character.id}
                ref={
                  characters.length === index + 1
                    ? lastItemElementRef
                    : undefined
                }
                item
                xs={12}
                sm={3}
              >
                <CharacterCard
                  char={character}
                  handleOnClick={handleClickOpen}
                ></CharacterCard>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default App;
