import { FaBeer } from 'react-icons/fa';
import { SearchbarStyle, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {

    return (
        <SearchbarStyle>
        <SearchForm  onSubmit={onSubmit}>
            <SearchFormButton type="submit" >
                <FaBeer size={34}/>
            </SearchFormButton>

            <SearchFormInput
                name="searchName"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </SearchForm >
    </SearchbarStyle>)
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}