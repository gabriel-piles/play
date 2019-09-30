import React from 'react';
import './Item.css';
import MoneyUnit from './moneyUnit/MoneyUnit';

const Item: React.FC = () => {
  return (
    <div className="item">
      <div className="description">1. Description</div>
      <div className="quantity">564.05€</div>
      <div className="graphic">
        <MoneyUnit></MoneyUnit>
      </div>
    </div>
  );
};

export default Item;