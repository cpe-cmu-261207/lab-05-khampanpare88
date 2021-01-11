const CourseCard = (props) => {
  return <div id="Course">
  <p>{props.name}</p>
  <p>{props.grd}</p>
  <p>{props.crd}</p>
  <p className="text-right"> <button onClick = {() =>props.del(props.name)} > - delete - </button></p>
  </div>;
};

export default CourseCard;
