interface RequestOptions {
  [key: string]: string | number;
}

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
