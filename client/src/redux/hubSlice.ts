import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HubState } from 'redux/types'
import { saveToLocalStorage } from 'redux/helpers'

const currentFilter =
  (JSON.parse(localStorage.getItem('currentFilter') as string) as string) || ''

const initialState: HubState = {
  currentFilter: currentFilter,
  isChangeSidebar: false,
  isHideSidebar: false,
  orderTitle: 'Popularity',
  isOpenCart: false,
  isOpenSearchGames: false,
  isSearching: false,
}

export const hubSlice = createSlice({
  name: 'hub',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload
      saveToLocalStorage('currentFilter', state.currentFilter)
    },
    setIsChangeSidebar: (state, action: PayloadAction<boolean>) => {
      state.isChangeSidebar = action.payload
    },
    setIsHideSidebar: (state, action: PayloadAction<boolean>) => {
      state.isHideSidebar = action.payload
    },
    setOrderTitle: (state, action: PayloadAction<string>) => {
      state.orderTitle = action.payload
    },
    setIsOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload
    },
    setIsOpenSearchGames: (state, action: PayloadAction<boolean>) => {
      state.isOpenSearchGames = action.payload
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload
    },
  },
})

export const {
  setCurrentFilter,
  setIsChangeSidebar,
  setIsHideSidebar,
  setOrderTitle,
  setIsOpenCart,
  setIsOpenSearchGames,
  setIsSearching,
} = hubSlice.actions

export default hubSlice.reducer
