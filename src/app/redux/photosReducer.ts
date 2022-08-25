import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import { deletePhoto, getPhotos } from "../api/jsonplaceholder";

export const getPhotosAction = createAsyncThunk(
  "photos/getPhotos",
  async (options: RequestOptions | undefined) => {
    const data = await getPhotos(options);
    return data;
  }
);

export const removePhoto = createAsyncThunk(
  "photos/removePhoto",
  async (id: number) => {
    const data = await deletePhoto(id);
    return { id, data };
  }
);

export const setAlbumId = createAction("photos/setAlbumId", (id: number) => {
  return {
    payload: id,
  };
});

const photosReducerSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [] as IPhoto[],
    fetchOptions: {} as RequestOptions,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotosAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPhotosAction.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.photos = action.payload.data;
        state.errorMessage = "";
      }
      if (!action.payload.success) {
        state.errorMessage = "Error! Can't load photos!";
      }
      state.isLoading = false;
    });

    builder.addCase(removePhoto.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removePhoto.fulfilled, (state, action) => {
      if (action.payload.data.success) {
        state.photos = state.photos.filter(
          (photo) => photo.id !== action.payload.id
        );
        state.errorMessage = "";
      }
      if (!action.payload.data.success) {
        state.errorMessage = "Error! Can't delete this photo!";
      }
      state.isLoading = false;
    });

    builder.addCase(setAlbumId, (state, action) => {
      if (action.payload === 0) {
        state.fetchOptions = {};
      } else {
        state.fetchOptions.albumId = action.payload;
      }
    });
  },
});

const { reducer } = photosReducerSlice;
export default reducer;
