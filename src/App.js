import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;
