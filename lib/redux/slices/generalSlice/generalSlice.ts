import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface GeneralSliceState {
    isLoginOpen: boolean,
    isEditProfileOpen: boolean,
    selectedPost: {} | null,
    ids: number[] | null,
    isBackUrl: string,
    posts: {} | null,
    suggested: {} | null,
    following: {} | null,
}

const initialState: GeneralSliceState = {
    isLoginOpen: false,
    isEditProfileOpen: false,
    selectedPost: null,
    ids: null,
    isBackUrl: "/",
    posts: null,
    suggested: null,
    following: null,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsLoginOpen: (state, action: PayloadAction<boolean>) => {
            state.isLoginOpen = action.payload
        },
        setIsEditProfileOpen: (state, action: PayloadAction<boolean>) => {
            state.isEditProfileOpen = action.payload
        },
    },
})