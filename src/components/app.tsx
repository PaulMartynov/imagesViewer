import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ReturnState } from "../redux/store";
import { getPhotosAction, removePhoto } from "../redux/photosReducer";

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
  useEffect(() => {
    props.getPhotosAction({
      _page: props.photos.currentPage,
    });
  }, []);

  return (
    <>
      <header>
        <div className={"filter"}>
          <select />
        </div>
      </header>
      <main className={"albums"}>
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
