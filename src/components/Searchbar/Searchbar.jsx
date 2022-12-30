import { useState } from 'react';
import {
  SearchWrap,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter your request');
    }
    onSubmit(query);
  };

  return (
    <SearchWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <span>Search</span>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="query"
          value={query}
          onChange={handleQueryChange}
        />
      </SearchForm>
    </SearchWrap>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
