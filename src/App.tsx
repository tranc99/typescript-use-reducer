import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const menuItems = [
  {
    itemType: 'pizza',
    name: 'The Crabby Pizza',
    waitTime: '30 mins',
    price: '$30',
    imgURL: 'https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg'
  },
  {
    itemType: 'burger',
    name: 'The Famous Crabby Burger',
    waitTime: '10 mins',
    price: '$40',
    imgURL: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg'
  },
  {
    itemType: 'shrimp',
    name: `Crabby's Shrimp Platter`,
    waitTime: '15 mins',
    price: '$50',
    imgURL: 'https://cdn.pixabay.com/photo/2012/07/27/20/48/prawns-53204_960_720.jpg'
  }
]

const menuOptions = menuItems.map((item) => {
  return (<option value={item.itemType}>{item.name}</option>)
})

const initialState = menuItems[0]

function App() {

  const [selectedItem, setSelectedItem] = useState(initialState)

  const handleChange = (e: any) => {
    alert(e.target.value)
    let newSelection = menuItems.find(item => item.itemType === e.target.value)
    if (newSelection !== undefined) {
      setSelectedItem(newSelection)
    }
  }

  const handleOrder = () => {
    alert('Ordering ' + selectedItem.name + ' for ' + selectedItem.price)
    // send order to our server
  }

  return (
    <div className="App">
      <h1>The Crabby Fish 🍔</h1>
      <h2>Welcome to The Crabby Fish.</h2>
      <h3> Please select your entree below.</h3>
      <select onChange={handleChange}>
        {menuOptions}
      </select>
      <button
        onClick={handleOrder}>
        Place Order
      </button>
          <div>
          Review your order:
          <h3>{selectedItem.name}</h3>
          <h4>Price - {selectedItem.price}</h4>
          <h4>Ready in {selectedItem.waitTime}</h4>
          <img src={selectedItem.imgURL} alt="your selection" width="300" height="300" />
          </div>
      }

    </div>
  );
}

export default App;
