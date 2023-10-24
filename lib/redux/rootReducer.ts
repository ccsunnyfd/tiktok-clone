/* Instruments */

import { generalSlice } from "./slices/generalSlice"
import { userSlice } from './slices/userSlice'

export const reducer = {
    general: generalSlice.reducer,
    user: userSlice.reducer
}