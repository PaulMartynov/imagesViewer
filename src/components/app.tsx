import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ReturnState } from "../redux/store";
import {
  getPhotosAction,
  removePhoto,
  setAlbumId,
} from "../redux/photosReducer";
import Pagination from "./pagination";
import Filter from "./filter";
import { generateNumbers } from "../utils/generateArray";

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
    <>
      <header />
      <main className={"albums"}>
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
        <div className={"albums__loader"}>
          {props.photos.isLoading ? "Loading..." : ""}
        </div>
        <div className={"albums__content"}>
          {props.photos.photos.map((photo) => (
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
          ))}
        </div>
      </main>
    </>
  );
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);
