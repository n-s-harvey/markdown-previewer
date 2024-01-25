import { createSlice } from '@reduxjs/toolkit'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export const input = createSlice({
  name: 'input',
  initialState: {
    value: `# Markdown Basics
Here is a little of everything you'll need to know to start writing in **Markdown**.  

This guide will teach the basics of formatting
- Headers
- Code
- Images

## Headers
To use a header, prefix your text with a \`#\` followed by a space: \`# This is a Header 1\` or \`## This is a Header 2\`

## Code
To format code in Markdown, you can write inline code by wrapping your code in a pair of backticks: \`\`code\`\`

To format code a codeblock, write three backticks at the beginning and end of your codeblock. Your Markdown previewer may support syntax highlighting for different words. For example:
\`\`\`
\`\`\`javascript
console.log("Hello world!");
\`\`\`


> You can get more information by visiting [the Markdown "Getting Started guide"](https://www.markdownguide.org/getting-started/) or check out the [syntax](https://www.markdownguide.org/basic-syntax/)  
>
> Made as a FreeCodeCamp certification project  

<div style="background-color: #0a0a23; ">
      <img id="logo" width="50%" style="margin-left: auto; margin-right: auto "src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
</div>
`
  },
  reducers: {
    updateInput: (state, action) => {
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateInput } = input.actions

export default input.reducer
