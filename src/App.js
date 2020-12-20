import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import TopNavBar from './components/TopNavBar';
import Cards from './components/Cards';
import SearchList from './components/SearchList';

import * as api from './api/books';
import { prepareBookList } from './helper/books';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.getAll().then((data) => {
      const listOfBooks = prepareBookList(data);
      setBooks(listOfBooks);
    });
  }, []);

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
                  <>
                    <h1>Lendo atualmente</h1>
                    <Cards books={books} shelf="currentlyReading" />
                    <h1>Quero ler</h1>
                    <Cards books={books} shelf="wantToRead" />
                    <h1>Leitura concluída</h1>
                    <Cards books={books} shelf="read" />
                  </>
                )}
              />
              <Route
                exact
                path="/search/:criteria"
                render={() => <SearchList />}
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
