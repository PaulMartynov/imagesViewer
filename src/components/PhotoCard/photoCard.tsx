import React from "react";

type PhotoCardProps = {
  photo: IPhoto;
  onClick: (photo: IPhoto) => void;
};

export default function PhotoCard(props: PhotoCardProps): JSX.Element {
  return (
    <div
      className={"photo-card"}
      onClick={() => {
        props.onClick(props.photo);
      }}
      data-testid={`photo-card`}
    >
      <img
        data-testid={`photo-card-img`}
        src={props.photo.thumbnailUrl}
        alt={props.photo.title}
      />
    </div>
  );
}
