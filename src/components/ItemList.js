import React, { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


const ItemList = () => {

  const [items, setItems] = useState(['ayman','naif','we']);
  const itemAdder = (title) => {
    setItems([...items, title]);
  };
  const removeItem = (e)=>{
    let x= e.target.name
    items.splice(x,1);
    setItems([...items])
  
      }
  return (
    <>
        <SearchItem/>
       <AddItem itemAdder={itemAdder} />
        {items.map((item,idx) => {
          if (item) {
          return (
             <div key= {idx} id={idx}>
               <h3>{item}</h3>
               
               <button name={idx} onClick={removeItem}>Remove</button>
             </div>
             );
          }
        })}
    </>
  );
}

export default ItemList;