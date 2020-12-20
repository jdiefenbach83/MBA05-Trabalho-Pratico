import { React, useState } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function TopNavBar() {
  const [criteria, setCriteria] = useState('');

  const handleCriteriaChange = (e) => {
    setCriteria(e.target.value);
  };

  const handleSearchClick = () => {
    setCriteria('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Lista de leituras</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={criteria}
            onChange={handleCriteriaChange}
          />
          <Link to={`/search/${criteria}`}>
            <Button
              variant="outline-success"
              disabled={!criteria}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
