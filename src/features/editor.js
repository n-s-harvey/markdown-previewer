import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateInput } from './inputSlice';

export default function Editor() {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(updateInput(event.target.value))
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Editor</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleInputChange} />
      </Form.Group>
    </Form>
  );
}
