import './WorkoutCardStyles.css'

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-container">
      <div className="workout-card">
        <h3>{workout.name}</h3> {/* Will be workout.name */}
        <div className='exercise'>
          <h4>Exercise Name</h4>
          <h4>Sets</h4>
          <h4>Repetitions</h4>
          <h4>Weight</h4>
        </div>
        {workout.exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <p>{exercise.name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.reps}</p>
            <p>{exercise.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutCard