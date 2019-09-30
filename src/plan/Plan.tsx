import React from 'react';
import './Plan.css';
import Item from '../item/Item'


const Plan: React.FC = () => {
  return (
    <div className="plan-container">
      <div className="plan">
        <div className="title">
          Awesome title
         </div>
        <Item></Item>
      </div>
    </div>
  );
};

export default Plan;