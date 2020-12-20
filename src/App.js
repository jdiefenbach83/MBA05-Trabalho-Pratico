import Container from 'react-bootstrap/Container';

import TopNavBar from './components/TopNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <TopNavBar />
      <Container>Here I am</Container>
    </>
  );
}

export default App;
