import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ProfileSliceState {
    id: string
    name: string
    bio: string
    image: string
    post: {} | null
    posts: {} | null
    allLikes: number
}

const initialState: ProfileSliceState = {
    id: '',
    name: '',
    bio: '',
    image: '',
    post: null,
    posts: null,
    allLikes: 0,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetProfile: (state) => {
            state.id = ''
            state.name = ''
            state.bio = ''
            state.image = ''
            state.post = null
            state.posts = null
            state.allLikes = 0
        },
    },
})