import React, { createRef, useEffect } from 'react';
import './moneyUnit.css';
import { TweenLite } from 'gsap';


const MoneyUnit: React.FC = () => {
  let moneyUnitRef = createRef<HTMLDivElement>();

  useEffect(() => {
    // Update the document title using the browser API
    TweenLite.to(moneyUnitRef.current, 1, { opacity: 1 });
  });

  return (
    <div ref={moneyUnitRef} className="money-unit"></div>
  )
}

export default MoneyUnit;
