import React from 'react';
import './expenseInput.css';

const ExpenseInput: React.FC = () => {
  return (
    <div className="expense-input-container">
      <div className="ui labeled input">
        <div className="ui label label">Expense</div>
        <input autoFocus type="text" />
      </div>
    </div>
  );
}

export default ExpenseInput;
