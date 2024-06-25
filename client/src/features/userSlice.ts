
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { PlayerType } from '../types/playerType'

// Define a type for the slice state
interface UserState {
  user: PlayerType | null 
}

// Define the initial state using that type
const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    registerUser: (state,  action: PayloadAction<PlayerType | null>) => {
      state.user = action.payload
    },


    logOutUser: (state, action: PayloadAction<PlayerType | null>) => {
        state.user = null
    }

  },
})

export const { registerUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.user

export default userSlice.reducer