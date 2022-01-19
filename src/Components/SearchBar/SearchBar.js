import "./SearchBar.css";

const SearchBar = ({handleChange}) => {



    
  return (
    <div>
    <input 
        className='SearchBar'
        type='search' 
        placeholder="Search Pokemons..."
        onChange={handleChange}
        
    />


    </div>
  );
};
export default SearchBar;
