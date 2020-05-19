import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

interface Item {
  itemType: string,
  name: string,
  description: string,
  waitTime: string,
  price: string,
  imgURL: string
}

interface SelectedItemState {
  selectedItem: Item
}

type Action = {
  type: string
}

const menuItems = [
  {
    itemType: 'pizza',
    name: 'The Crabby Pizza',
    description: 'Our original Crabby Pizza made by Chef John.',
    waitTime: '30 mins',
    price: '$30',
    imgURL: 'https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg'
  },
  {
    itemType: 'burger',
    name: 'The Famous Crabby Burger',
    description: 'The burger that made history.',
    waitTime: '10 mins',
    price: '$40',
    imgURL: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg'
  },
  {
    itemType: 'shrimp',
    name: `Crabby's Shrimp Platter`,
    description: 'Healthy and sumptious, the king of shrimp.',
    waitTime: '15 mins',
    price: '$50',
    imgURL: 'https://cdn.pixabay.com/photo/2012/07/27/20/48/prawns-53204_960_720.jpg'
  }
]

const menuOptions = menuItems.map((item) => {
  return (<option value={item.itemType}>{item.name}</option>)
})

const initialState = {selectedItem: menuItems[0]}

function reducer(state: SelectedItemState, action: Action): SelectedItemState {
  let newSelection = menuItems.find(item => item.itemType === action.type)
  if (newSelection !== undefined) {
    return {selectedItem: newSelection}
  } else {
    return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOrder = () => {
    alert('Ordering ' + state.selectedItem.name + ' for ' + state.selectedItem.price)
    // send order to our server
  }

  return (
    <div className="App">
      <h1>The Crabby Fish 🍔</h1>
      <h2>Welcome to The Crabby Fish.</h2>
      <h3> Please select your entree below.</h3>
      <select onChange={(e) => dispatch({type: e.target.value})}>
        {menuOptions}
      </select>
      <button
        onClick={handleOrder}>
        Place Order
      </button>
      <div>
        Review your order:
        <h3>{state.selectedItem.name}</h3>
        <h4><em>{state.selectedItem.description}</em></h4>
        <h4>Price - {state.selectedItem.price}</h4>
        <h4>Ready in {state.selectedItem.waitTime}</h4>
        <img src={state.selectedItem.imgURL} alt="your selection" width="300" height="300" />
      </div>
    </div>
  );
}

export default App;
