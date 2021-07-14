import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';

class App extends Component {
  // addContact = ({ name, number }) => {
  //   if (this.state.contacts.find((contact) => contact.name === name)) {
  //     alert(`${name} already exist`);
  //     return;
  //   }
  //   const contact = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

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
