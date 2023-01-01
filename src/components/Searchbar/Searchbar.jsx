import {
  SearchWrap,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ value, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    onSubmit(form.elements.query.value);
    form.reset();
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
          defaultValue={value}
        />
      </SearchForm>
    </SearchWrap>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
