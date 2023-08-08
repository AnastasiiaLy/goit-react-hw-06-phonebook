import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
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
