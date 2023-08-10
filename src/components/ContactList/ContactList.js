import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactList__delete_btn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
