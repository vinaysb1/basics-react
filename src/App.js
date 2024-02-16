import React from 'react';
import './App.css';

function App() {
  const myArray = ['apple', 'banana', 'orange'];

  // const myList = myArray.map((item, index) => <p key={index}>{item}</p>);
const myList = myArray.map((item,index)=>
  <div key = {index}> {item} </div>
)
  return (
    <div className="App">
      {myList}
    </div>
  );
}

export default App;
