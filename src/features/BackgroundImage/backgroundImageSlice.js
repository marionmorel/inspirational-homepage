import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const accessKey = `${process.env.REACT_APP_UNSPLASH_KEY}`;
const API_URL = `https://api.unsplash.com/search/photos?query=beach&page=1&per_page=5&client_id=${accessKey}`

export const getImage = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
  
    return json.results.map((result) => result.urls.full);
};

export const getBackgroundImage = createAsyncThunk(
    'backgroundImage/getImage',
    getImage
);

export const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0
    },
    reducers: {
        nextImage: (state) => {
            state.currentImageUrlIndex = (state.currentImageUrlIndex + 1) % state.imageUrls.length;
        },
        previousImage: (state) => {
            state.currentImageUrlIndex = (state.currentImageUrlIndex - 1 + state.imageUrls.length) % state.imageUrls.length;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBackgroundImage.fulfilled, (state, action) => {
            state.imageUrls = action.payload;
            state.currentImageUrlIndex = 0;
        })
    }
})

export const { nextImage, previousImage } = backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;

