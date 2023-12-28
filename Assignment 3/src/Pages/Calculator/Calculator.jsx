
import './Calculator.scss';
import React from 'react';
import padItems from '../../Data/padItems';

const Calculator = ({ screenText, calculate }) => (
  <div className="calculator">
    <h1 className="calculator-title">Lets do some math</h1>
    <div className="screen">{screenText}</div>
    <div className="pad">
      {
        padItems.map((item) => (
          <div
            role="presentation"
            key={item.sym}
            onClick={() => calculate(item.sym)}
            className={item.class}
          >
            {item.sym}
          </div>
        ))
      }
    </div>
  </div>
);

export default Calculator;
