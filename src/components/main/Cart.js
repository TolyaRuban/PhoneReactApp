import React from 'react';

const Cart = (props) => (

  <div className="cart">
    <h2>Shoping Cart</h2>
    <ul className="cart__ul">
      {Object.entries(props.name).map(([item, index]) => (
        <li key={item + index}
          className="cart__item">
          <button
            className="btn cart__btn"
            onClick={() => {
              props.onDeletePhone(item)
            }}
          >
            x</button>
          {item} - {index}
        </li>
      ))}
    </ul>
  </div>

  
);

export default Cart;