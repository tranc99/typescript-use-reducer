import React, { useReducer } from 'react';
import logo from './logo.svg';

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
    <div className="container">
      <div className="row">
        <div className="col-sm">
        </div>
        <div className="col-sm-8">
          <h1 className="display-3">The Crabby Fish
          <svg className="bi bi-shop-window" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.12 1.175A.5.5 0 0 1 3.5 1h9a.5.5 0 0 1 .38.175l2.759 3.219A1.5 1.5 0 0 1 16 5.37v.13h-1v-.13a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.13H0v-.13a1.5 1.5 0 0 1 .361-.976l2.76-3.22z"/>
            <path d="M2.375 6.875c.76 0 1.375-.616 1.375-1.375h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 1 0 2.75 0h1a2.375 2.375 0 0 1-4.25 1.458 2.371 2.371 0 0 1-1.875.917A2.37 2.37 0 0 1 8 6.958a2.37 2.37 0 0 1-1.875.917 2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.5h1c0 .76.616 1.375 1.375 1.375z"/>
            <path d="M4.75 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM2 8.854V15h12V8.854a3.354 3.354 0 0 0 1-.27V15h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V8.583c.311.14.647.232 1 .271zm0-1.008V7H1v.437c.291.207.632.35 1 .409zm13-.409c-.291.207-.632.35-1 .409V7h1v.437z"/>
            <path d="M4 13V9H3v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9h-1v4H4z"/>
          </svg>
          </h1>
          <h2><small className="test-muted">Welcome to The Crabby Fish.</small></h2>
          <p className="lead"> Please select your entree below.</p>
          <select onChange={(e) => dispatch({type: e.target.value})}>
            {menuOptions}
          </select>
          <button className="btn btn-Dark"
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
        <div className="col-sm">
        </div>
      </div>
    </div>
  );
}

export default App;
