import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const photosReducerSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [] as IPhoto[],
    fetchOptions: {} as RequestOptions,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotosAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPhotosAction.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.photos = action.payload.data;
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
      }
    });
  },
});

const { reducer } = photosReducerSlice;
export default reducer;
