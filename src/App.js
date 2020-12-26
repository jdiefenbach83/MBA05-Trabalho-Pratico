//External imports
import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

//Internal imports
import store from './store'; 
import { fetchBooks } from './redux/actions/booksActions';

import TopNavBar from './components/TopNavBar';
import Shelfs from './pages/Shelfs';
import SearchList from './pages/SearchList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(fetchBooks());

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
                  <Shelfs />
                )}
              />
              <Route
                exact
                path="/search/:criteria"
                render={() => (
                  <SearchList />
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
