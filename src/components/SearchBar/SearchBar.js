import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../contactsSlice'; // Переконайтеся, що шлях правильний
import css from './SearchBar.module.css';

const SearchBar = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.searchBar__container}>
      <p className={css.searchBar__text}>Find contact</p>
      <input
        className={css.searchBar__input}
        type="text"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
