import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import TopNavBar from './components/TopNavBar';
import Shelfs from './pages/Shelfs';
import SearchList from './pages/SearchList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [globalBooks, setGlobalBooks] = useState([]);

  const updateOneBook = (book) => {
    const filteredBooks = globalBooks.filter((item) => item.id !== book.id);

    setGlobalBooks([...filteredBooks, book]);
  };

  return (
    <>
      <Router>
        <TopNavBar />
        <div className="App">
          <Container>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Shelfs />
                )}
              />
              <Route
                exact
                path="/search/:criteria"
                render={() => (
                  <SearchList
                    currentBooks={globalBooks}
                    updateOneBook={updateOneBook}
                  />
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
      </Router>
    </>
  );
}


export default App;
