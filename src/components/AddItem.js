import React, { useState } from 'react';

const AddItem = ({ itemAdder }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    itemAdder(title);
    setTitle("");
   }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Add Item' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type='submit' value='add' />
    </form>
  );
}
 
export default AddItem;