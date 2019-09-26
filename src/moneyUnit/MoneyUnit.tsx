import React, { createRef, useEffect } from 'react';
import './moneyUnit.css';
import { TimelineLite, Power3 } from 'gsap';


const MoneyUnit: React.FC = () => {
  let moneyUnitRef = createRef<HTMLDivElement>();

  function someFunction(){
      console.log('it worked');
  }

  useEffect(() => {
    var timelineLite = new TimelineLite({onComplete:someFunction});
    if(moneyUnitRef.current){
      timelineLite.to(moneyUnitRef.current, .2, { opacity: 1, ease: Power3.easeInOut})
      .to(moneyUnitRef.current, 1.5, { x:100, ease: Power3.easeInOut})
      .to(moneyUnitRef.current, 1.5, { x:-100, ease: Power3.easeInOut})
      .to(moneyUnitRef.current, 1.5, { x:100, ease: Power3.easeInOut});
    }
  });

  return (
    <div ref={moneyUnitRef} className="money-unit"></div>
  )
}

export default MoneyUnit;
