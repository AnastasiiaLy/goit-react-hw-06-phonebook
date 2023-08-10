import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import css from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
