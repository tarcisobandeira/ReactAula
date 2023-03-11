import './styles.css';

export const SearchInput = ({onChange, value}) => (
    <input
    className='search-input'
    onChange={onChange}
    value={value}
    type="search"
    placeholder='Search'
  />
)