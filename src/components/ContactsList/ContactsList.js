import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contacts_list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contacts_item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.contacts_list__button} onClick={() => onDeleteContact(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
