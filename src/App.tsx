import React from 'react';
import './App.css';
import PlanList from './plan/Plan';
import Menu from './menu/Menu';

const App: React.FC = () => {
  return (
    <div className="App">
        <Menu></Menu>
        <PlanList></PlanList>
    </div>
  );
}

export default App;
