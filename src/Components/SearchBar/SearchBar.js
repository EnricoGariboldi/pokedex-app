import "./SearchBar.css";

const SearchBar = ({handleChange, searchValue}) => {



    
  return (
    <div>
    <input 
        className='SearchBar'
        type='search' 
        placeholder="Search Pokemons..."
        onChange={handleChange}
        value = {searchValue}
    />


    </div>
  );
};
export default SearchBar;
