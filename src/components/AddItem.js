import React, { useState } from 'react';
import './AddItem.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';



const AddItem = ({ itemAdder }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    itemAdder(title);
    setTitle("");
   }
  return (
    <>
    <form className='addForm' onSubmit={handleSubmit}>
      <input className='addField' placeholder='Add Item' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className='addBtn'><AddIcon /></button>
    </form>
    
    </>
  );
}
 
export default AddItem;

