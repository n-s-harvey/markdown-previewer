import { createSlice } from '@reduxjs/toolkit'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export const input = createSlice({
  name: 'input',
  initialState: {
    value: ""
  },
  reducers: {
    updateInput: (state, action) => {
      state.value = marked.parse(action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateInput } = input.actions

export default input.reducer
