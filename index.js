import React from 'react';
import ReactDOM from 'react-dom';
import sum,  {sub, multi, div} from './Calc'

ReactDOM.render(
  <> 
  <h1>Calculator App using React</h1>
  <ul>
    <li>Addition of two number is {sum()}</li>
    <li>Subtruction of two number is  {sub()}</li>
    <li>Division of two number is {div()}</li>
    <li>Multiplication of two number is  {multi()}</li>
   
  </ul>
  </>
, document.getElementById('root')
  );