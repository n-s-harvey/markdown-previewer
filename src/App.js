import logo from './logo.svg';
import './app.scss';
import Editor from './features/editor';
import Previewer from './features/previewer';
import Navigation from './features/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Editor />
      <Previewer />
    </>
  );
}

export default App;
