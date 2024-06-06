import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from '../features/BackgroundImage/backgroundImageSlice';
import weatherReducer from '../features/Weather/weatherSlice';
import quoteReducer from '../features/Quote/quoteSlice';
import goalsReducer from '../features/Goals/goalsSlice';


export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    goals: goalsReducer,
  }
});
