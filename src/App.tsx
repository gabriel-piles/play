import React from 'react';
import './App.css';
import PlanList from './planList2/PlanList';
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
