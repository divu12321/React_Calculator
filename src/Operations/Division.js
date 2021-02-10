import React,{useState, useEffect} from 'react';
import '../App.css';
import {useSelector,useDispatch}         from 'react-redux';
import { connect }            from 'react-redux';
import { RESULT,UPDATE_VALUE_1,UPDATE_VALUE_2  }       from '../redux/operations/types';

const Division=(props)=> {
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

  const Division=(e)=>{
    e.preventDefault();
    let Num1=props.value1
    let Num2=props.value2
    if(Num1=='' && Num2==''){
        return;
      }else if(Num2==0 || Num2=='0'){
        dispatch({type:RESULT,payload:'Error'})
      }else{
        let sum= parseInt(Num1)/parseInt(Num2);
         dispatch({type:RESULT,payload:sum})
      }
      dispatch({type:UPDATE_VALUE_1,payload:""})
      dispatch({type:UPDATE_VALUE_2,payload:""})
  }

  return (
    <div className="alignBtn">
        <button className="btn btnStyle" onClick={Division}><i class="fa fa-divide"></i><span>Division</span></button>
    </div>
  );
}


const mapStateToProps = (store)=>{
    return {
        value1 : store.value1,
        value2 : store.value2,
    }
};
export default connect(mapStateToProps,{})(Division);