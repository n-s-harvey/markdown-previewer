import { createSlice } from '@reduxjs/toolkit'

export const input = createSlice({
  name: 'input',
  initialState: {
    value: ""
  },
  reducers: {
    updateInput: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateInput } = input.actions

export default input.reducer
