import React from 'react';
import './App.css';
import Input from './input/ExpenseInput';
import 'semantic-ui-css/semantic.min.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
