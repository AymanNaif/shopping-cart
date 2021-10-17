import React from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <ItemList />
    </div>
    </>
  );
}

export default App;
