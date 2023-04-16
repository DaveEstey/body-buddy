const ExerciseCard = (props) => {
  return (
    <div className="exercise-card">
      <h1>{props.name}</h1>
      <h2>{props.type}</h2>
      <h2>{props.muscle}</h2> 
    </div>
  )
}

export default ExerciseCard