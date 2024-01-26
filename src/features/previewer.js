import { useSelector } from "react-redux"
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import Container from 'react-bootstrap/Container';

export default function Previewer() {
  const rawText = useSelector(state => state.input.value);
  marked.setOptions({
    breaks: true
  })
  const markdownText = marked.parse(rawText);
  const innerHTML = { __html: markdownText };

  return (
    <Container>
      <hr />
      <div id="preview" dangerouslySetInnerHTML={innerHTML}>
      </div>
    </Container>
  )
}
