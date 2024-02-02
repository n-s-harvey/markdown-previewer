import logo from './logo.svg';
import './app.scss';
import Container from 'react-bootstrap/Container';
import Editor from './features/editor';
import Previewer from './features/previewer';
import Navigation from './features/navigation';
import Accordion from 'react-bootstrap/Accordion'

function App() {
  return (
    <Container id='page'>
      <Navigation />
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Editor</Accordion.Header>
          <Accordion.Body>
            <Editor />
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
