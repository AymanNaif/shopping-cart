import React, { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import './ItemList.css'
import RemoveIcon from '@mui/icons-material/Remove';
const ItemList = () => {

  const [items, setItems] = useState(['Item Title','Item Title','Item Title','Item Title']);
  
  const itemSearcher = (searchTitle) =>{
    const newArr = items.filter(word=>word === searchTitle)
    if (newArr.length > 0){
    setItems(newArr)
  }
  }

  const itemAdder = (title) => {
    setItems([...items, title]);
  };

  const removeItem = (idx)=>{
    const x= idx
    items.splice(x,1);
    setItems([...items])
      }


  return (
    <>
    <div className='listContanier'>
      <div className='elemntOne'>
        <SearchItem itemSearcher={itemSearcher}/>
        <AddItem itemAdder={itemAdder} />
      </div>

      <div className='elemntTwo'>
        {items.map((item,idx) => {
          if (item) {
          return (
             <div className='itemElemnt' key= {idx} >
               <p className='ItemTitle'>{item}</p>
               
               <button className='ItemBtn' onClick={(e)=>removeItem(idx)}>
               <RemoveIcon color='white'/></button>
             </div>
             );
          }
        })}
      </div>
    </div>
    </>
  );
}

export default ItemList;