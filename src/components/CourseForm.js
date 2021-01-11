import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useReducer, useState } from "react";
import { sample } from "../App";

const CourseForm = () => {
  const addCourse = useContext(sample)
  //const inputData = {name:"",grd:"A",crd:"1"};
  const [state,dispatch] = useReducer((prevstate,action) => {
    switch(action.type){
      case 'setname' :
        return {...prevstate,name : action.value}
      case 'setgrd' :
        return {...prevstate,grd : action.value}
      case 'setcrd' :
        return {...prevstate,crd : action.value}
      default : throw new Error();
    }
  },{name:"",grd:"A",crd:"1"})

  return (
    <>
       <form onSubmit ={
          e => {e.preventDefault();
           addCourse(state)}}>
            <td>
           Credit :
        <select onChange = { e => 
            //setInputData({...inputData,crd: e.currentTarget.value}) 
            dispatch({type : 'setcrd',value : e.currentTarget.value})
          }>
          {CREDITS.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>     
          </td>
          <td>
           Grade :
          <select onChange = { e => 
           //setInputData({...inputData,grd: e.currentTarget.value}) 
           dispatch({type : 'setgrd',value : e.currentTarget.value})
          }>
          {GRADES.map(item => {
            return <option value={item.name}>{item.name}</option>
          })}
        </select>    
          </td>
          <td>
          ID :
          <input className = "bg-blue-100 rounded-3xl p-1  hover:bg-red-200" type="text" onChange = { e => 
           // setInputData({...inputData,name: e.currentTarget.value}) 
           dispatch({type : 'setname',value : e.currentTarget.value})
          }/>
          </td>
          <td><button className = "bg-red-500 rounded-3xl p-1  hover:bg-red-200" type="submit"> + </button></td> 
       </form>
    </>
  );
};

export default CourseForm;