/* Instruments */
import type { ReduxState } from '@/lib/redux'
import { createSelector } from '@reduxjs/toolkit'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
const selectPosts = (state: ReduxState) => state.posts
export const selectAllLikesCount = createSelector([selectPosts], (posts) => posts.reduce((acc: number, post: Post) => acc + post.likes.length, 0))
