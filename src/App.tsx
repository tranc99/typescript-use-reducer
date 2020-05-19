import React from 'react';
import logo from './logo.svg';
import './App.css';

const menuItems = [
  {
    itemType: 'pizza',
    name: 'The Crabby Pizza',
    waitTime: '20 mins',
    price: '$30',
    imgURL: 'https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg'
  },
  {
    itemType: 'burger',
    name: 'The Famous Crabby Burger',
    waitTime: '10 mins',
    price: '$40',
    imgURL: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg'
  }
]

let menuOptions = menuItems.map((item) => {
  return (<option value={item.itemType}>{item.name}</option>)
})

function App() {

  return (
    <div className="App">
      <h1>The Crabby Fish 🍔</h1>
      <h2>Welcome to The Crabby Fish.</h2>
      <h3> Please select your entree below.</h3>
      <select onChange={e => alert(e.target.value)}>
        {menuOptions}
      </select>
      <button>Place Order</button>
      <div>
        Review your order:
        <h3>{menuItems[1].name}</h3>
        <h4>Price - {menuItems[1].price}</h4>
        <h4>Ready in {menuItems[1].waitTime}</h4>
        <img src={menuItems[1].imgURL} alt="dish" width="300" height="300" />
      </div>
    </div>
  );
}

export default App;
