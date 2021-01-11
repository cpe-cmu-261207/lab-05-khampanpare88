import { createContext, useEffect, useReducer } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
import { useContext, useState } from "react";

export const sample = createContext()

function App() {
  const [myCourses, setMyCourse] = useState([]);
  const [GPA, setGPA] = useState(4.0);
  useEffect(() => {
    const temp = localStorage.getItem('f')
    if(temp!=null){
      setMyCourse(JSON.parse(temp))
      calculateGPA(JSON.parse(temp))
    }
  },[])
  useEffect(() => {
    localStorage.setItem('f',JSON.stringify(myCourses))
  },[myCourses]) 
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    var r_gpa = 0
    var r_cre  = 0 
    var cal_gpa = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          r_gpa = 4
          break
        case 'B+' :
          r_gpa = 3.5
          break
        case 'B' :
          r_gpa = 3
          break
        case 'C+' :
          r_gpa = 2.5
          break
        case 'C' :
          r_gpa = 2
          break
        case 'D+' :
          r_gpa = 1.5
          break
        case 'D' :
          r_gpa = 1
          break
        case 'F' :
          r_gpa = 0
          break
      }  
      r_cre += Number(item.crd) 
      cal_gpa += r_gpa * Number(item.crd)
    });
    setGPA(cal_gpa / r_cre) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(inputData) {
    console.log(inputData)
    // TODO
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <sample.Provider value = {addCourse}>
      <div id="main">
      <h1>
        GPA CALCULATOR
      </h1>
      </div>
      <h2><u>My courses</u></h2>
      <div id="card">
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
      <CourseForm /> 
      </div>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <h3>GPA : {GPA}</h3>
    
  </sample.Provider>
  
  );
}

export default App;