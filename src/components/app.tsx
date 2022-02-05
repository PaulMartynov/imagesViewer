import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ReturnState } from "../redux/store";
import { getPhotosAction, removePhoto } from "../redux/photosReducer";
import Pagination from "./pagination";

const mapStateToProps = (state: ReturnState) => ({
  photos: state.photos,
});

const mapDispatchToProps = {
  getPhotosAction,
  removePhoto,
};

function App(
  props: ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const toCurrentPage = (pageNum: number) => {
    if (pageNum > 0 && pageNum <= 500) {
      props.getPhotosAction({
        _page: pageNum,
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

  useEffect(() => {
    toCurrentPage(1);
  }, []);

  return (
    <>
      <header />
      <main className={"albums"}>
        <div className={"albums__filter"}>
          <select />
        </div>
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
