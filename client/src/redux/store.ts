import { configureStore } from '@reduxjs/toolkit'
import hubReducer from 'redux/hubSlice'
import addGameReducer from 'redux/addGameSlice'
import gamesReducer from 'redux/gamesSlice'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: { ignoreState: true, ignoreActions: true },
    }),
  reducer: {
    hub: hubReducer,
    addGame: addGameReducer,
    games: gamesReducer,
  },
})
