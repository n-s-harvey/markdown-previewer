import { useSelector } from "react-redux"

export default function Previewer() {
  const parsedMarkdown = useSelector(state => state.input.value);
  const innerHTML = { __html: parsedMarkdown };
  return (
    <>
      <p>Preview:</p>
      <div id="preview" dangerouslySetInnerHTML={innerHTML}>
        {/* {parsedMarkdown} */}
      </div>
    </>
  )
}
