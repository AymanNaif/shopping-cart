import React, { useState } from 'react';
import './SearchItem.css'
import  SearchIcon from '@mui/icons-material/Search';

const SearchItem = ({itemSearcher}) => {
const [searchTitle, setSearchTitle] = useState('');
const searchHandler =(e) =>{
e.preventDefault();
itemSearcher(searchTitle);
setSearchTitle('');
}
    return (
    <form className='searchForm' onSubmit={searchHandler} >
      <input className='searchField' name='search' placeholder='Search Item' type='text' onChange={e =>setSearchTitle(e.target.value)}/>
      <button className='searchBtn' ><SearchIcon /></button>
    </form>
  );
}
 
export default SearchItem;