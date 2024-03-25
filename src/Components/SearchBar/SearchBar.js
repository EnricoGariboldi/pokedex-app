import "./SearchBar.css";

const SearchBar = ({handleChange}) => {



    
  return (
    <div>
    <input 
        className='SearchBar'
        type='search' 
        placeholder="Search Pokemons..."
        onChange={handleChange}
        data-test="search-bar"
    />


    </div>
  );
};
export default SearchBar;
