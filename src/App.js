import React,{useState, useEffect} from 'react';
import './App.css';
import {useSelector,useDispatch}         from 'react-redux';
import Add from './Operations/Add.js'
import Subtract from './Operations/Subtract.js'
import Multiply from './Operations/Multiply.js'
import Division from './Operations/Division.js'
import Clear from './Operations/Clear.js'

import { UPDATE_VALUE_1,UPDATE_VALUE_2 }       from './redux/operations/types';
import { connect }            from 'react-redux';

const App=(props)=> {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })




  const updateValue1 = (e)=>{
    e.preventDefault();
    dispatch({type: UPDATE_VALUE_1,payload: e.currentTarget.value})
  }

  const updateValue2 = (e)=>{
    e.preventDefault();
    dispatch({type: UPDATE_VALUE_2,payload: e.currentTarget.value})
  }


  return (
    <div className="App">
    <div className="wrapper">
        <header className="header"><p>Calculator</p> </header>
      <form> 
        <div className="calculator">
          <label>Enter Value 1</label>
          <input type="number" id="num1" value={props.value1} placeholder="Enter a number" onChange={updateValue1}/>
          <label>Enter Value 2</label>
          <input type="number" id="num2" value={props.value2} placeholder="Enter a number"  onChange={updateValue2}/>
          <div className="alignBtn">
            <Add />
            <Subtract />
          </div>
          <div className="alignBtn">
            <Multiply />
            <Division />
          </div>
          <div className="alignBtn">
           <Clear/>
          </div>
         <div>
          <label className="text"> Result </label>
          <input type="text" id="result" value={props.result}  readOnly />
        </div> 
        </div> 
      </form> 
    </div>
    </div>
  );
}
const mapStateToProps = (store)=>{
  console.log("result",store)
  return {
      result : store.result,
      value1 : store.value1,
      value2 : store.value2,
  }
};
export default connect(mapStateToProps,{})(App);
