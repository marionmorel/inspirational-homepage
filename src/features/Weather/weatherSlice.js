import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const accessKey = `${process.env.REACT_APP_OPENWEATHER_KEY}`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${accessKey}&units=metric`;

export const fetchWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    ({ city, state }) => fetchWeather(city, state)
);

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "Dublin",
        state: "Ireland",
        metadata: {},
        temperature: ""
    },
    reducers: (builder) => ({
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        }
    }),
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.metadata = action.payload.weatherMetadata;
            state.temperature = action.payload.temperature;
        })
    }
})

export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;

