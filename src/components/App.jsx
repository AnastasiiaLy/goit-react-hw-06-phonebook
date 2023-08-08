import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'; // Переконайтеся, що шлях правильний
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import css from './App.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1 className={css.header}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.header}>Contacts</h2>
          <SearchBar />
          <ContactList /> {/* Не передавайте `contacts` через пропси */}
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
