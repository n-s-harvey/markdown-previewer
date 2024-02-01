import logo from './logo.svg';
import './app.scss';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Editor from './features/editor';
import Previewer from './features/previewer';
import Navigation from './features/navigation';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function App() {
  //TODO: should this be moved into a state slice?
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <Container id='page'>
      <Navigation />
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Editor</Accordion.Header>
          <Accordion.Body>
            <Button variant="outline-primary" size="sm" className='ms-5'
              onClick={handleExpandClick}>
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
            <Editor expanded={isExpanded} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            Previewer
          </Accordion.Header>
          <Accordion.Body>
            <Previewer />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default App;
