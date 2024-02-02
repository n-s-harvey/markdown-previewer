import { createSlice } from '@reduxjs/toolkit'


export const expanded = createSlice({
  name: 'expanded',
  initialState: { value: false },
  reducers: {
    toggleExpanded: (state, action) => {
      state.value = !state.value;
    }
  }
})

export const { toggleExpanded } = expanded.actions;

export default expanded.reducer;
