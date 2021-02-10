import React,{useState, useEffect} from 'react';
import '../App.css';
import {useSelector,useDispatch}         from 'react-redux';
import { connect }            from 'react-redux';
import { RESULT,UPDATE_VALUE_1,UPDATE_VALUE_2  }       from '../redux/operations/types';

const Clear=(props)=> {
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

  const Clear=()=>{
    dispatch({type:UPDATE_VALUE_1,payload:""})
    dispatch({type:UPDATE_VALUE_2,payload:""})
  }

  return (
    <div className="alignBtn">
        <button className="btn btnStyle" onClick={Clear}><span>Clear</span></button>
    </div>
  );
}


const mapStateToProps = (store)=>{
    return {
        value1 : store.value1,
        value2 : store.value2,
    }
};
export default connect(mapStateToProps,{})(Clear);