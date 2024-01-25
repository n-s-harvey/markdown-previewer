import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateInput } from './inputSlice';

export default function Editor() {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(updateInput(event.target.value))
  }
  const sampleMarkdown = useSelector(state => state.input.value);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Editor</Form.Label>
        <Form.Control as="textarea" rows={10} onChange={handleInputChange} defaultValue={sampleMarkdown} />
      </Form.Group>
    </Form>
  );
}
