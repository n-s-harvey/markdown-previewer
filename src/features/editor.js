import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateInput } from './inputSlice';

export default function Editor(props) {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(updateInput(event.target.value))
  }
  const sampleMarkdown = useSelector(state => state.input.value);
  return (
    <Container id='editor'>
      {/*TODO: update to maximize editor*/}
      <Form>
        <Form.Control as="textarea" onChange={handleInputChange} defaultValue={sampleMarkdown} className={`${props.expanded ? 'expanded' : ''}`} />
      </Form>
    </Container>
  );
}
