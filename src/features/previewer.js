import { useSelector } from "react-redux"
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export default function Previewer() {
  const rawText = useSelector(state => state.input.value);
  const markdownText = marked.parse(rawText);
  const innerHTML = { __html: markdownText };

  return (
    <>
      <p>Preview:</p>
      <div id="preview" dangerouslySetInnerHTML={innerHTML}>
        {/* {parsedMarkdown} */}
      </div>
    </>
  )
}
