import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateInput } from './inputSlice';
import { toggleExpanded } from './expandedSlice';

export default function Editor() {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(updateInput(event.target.value))
  }
  const handleExpandedChange = () => {
    dispatch(toggleExpanded())
  }
  const sampleMarkdown = useSelector(state => state.input.value);
  const isExpanded = useSelector(state => state.expanded.value);
  return (
    <Container id='editor'>
      {/*TODO: update to maximize editor*/}
      <Button variant="outline-primary" size="sm"
        onClick={handleExpandedChange}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </Button>
      <Form>
        <Form.Control as="textarea" onChange={handleInputChange} defaultValue={sampleMarkdown} className={`${isExpanded ? 'expanded' : ''}`} />
      </Form>
    </Container>
  );
}
