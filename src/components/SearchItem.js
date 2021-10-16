import React, { useState } from 'react';

const SearchItem = () => {
const [searchTitle, setSearchTitle] = useState()

    return (
    <form  >
      <input placeholder='Search Item' type='text'/>
      <input type='submit' value='search' onChange={e =>setSearchTitle(e.target.value)}/>
    </form>
  );
}
 
export default SearchItem;