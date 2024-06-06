import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'https://api.quotable.io/quotes/random?tags=famous-quotes';

export const fetchQuote = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    const quoteData = json[0];
    return {
        quote: quoteData.content,
        author: quoteData.author,
    }
}

export const getQuote = createAsyncThunk(
    "quote/getQuote",
    fetchQuote
)

export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
      quote: "",
      author: ""
    },
    reducers: (builder) => ({}),
    extraReducers: (builder) => {
      builder.addCase(getQuote.fulfilled, (state, action) => {
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      });
    }
});

export default quoteSlice.reducer;