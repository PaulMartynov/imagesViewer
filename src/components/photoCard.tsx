import React from "react";

type PhotoCardProps = {
  photo: IPhoto;
};

export default function PhotoCard(props: PhotoCardProps): JSX.Element {
  return (
    <div className={"photo-card"}>
      <img src={props.photo.thumbnailUrl} alt={props.photo.title} />
    </div>
  );
}
