import { useSelector } from "react-redux"

export default function Previewer() {
  // TODO: update to pull parsed Markdown from state
  const rawText = useSelector(state => state.input.value);
  return (
    <>
      <p>Preview:</p>
      <div id="preview">
        {rawText}
      </div>
    </>
  )
}
