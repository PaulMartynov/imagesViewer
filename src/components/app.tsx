import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container, Grid, LinearProgress } from "@mui/material";
import {
  getPhotosAction,
  removePhoto,
  setAlbumId,
} from "../redux/photosReducer";
import { ReturnState } from "../redux/store";
import Pagination from "./pagination";
import Filter from "./filter";
import { generateNumbers } from "../utils/generateArray";
import PhotoCard from "./photoCard";
import "./main.scss";

const mapStateToProps = (state: ReturnState) => ({
  photos: state.photos,
});

const mapDispatchToProps = {
  getPhotosAction,
  removePhoto,
  setAlbumId,
};

function App(
  props: ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const toCurrentPage = (pageNum: number) => {
    if (pageNum > 0 && pageNum <= 500) {
      props.getPhotosAction({
        _page: pageNum,
        ...props.photos.fetchOptions,
      });

      setCurrentPage(pageNum);
    }
  };

  const nextPage = () => {
    toCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    toCurrentPage(currentPage - 1);
  };

  const selectAlbum = (id: number) => {
    props.setAlbumId(id);
  };

  useEffect(() => {
    toCurrentPage(currentPage);
  }, [props.photos.fetchOptions]);

  return (
    <Container>
      <header>
        <Stack
          paddingTop={2}
          paddingBottom={2}
          spacing={2}
          direction={"row"}
          alignItems="center"
        >
          <Filter
            isLoading={props.photos.isLoading}
            optionName={"Album"}
            options={generateNumbers()}
            onSelect={selectAlbum}
          />
          <Pagination
            min={1}
            max={500}
            isLoading={props.photos.isLoading}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            toCurrentPage={toCurrentPage}
          />
        </Stack>
      </header>
      <main className={"albums"}>
        <Box paddingBottom={2}>
          {props.photos.isLoading ? <LinearProgress /> : null}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {props.photos.photos.map((photo) => (
              <React.Fragment key={photo.id}>
                <Grid item>
                  <PhotoCard photo={photo} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </main>
    </Container>
  );
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);
