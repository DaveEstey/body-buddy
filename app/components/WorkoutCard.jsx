import './WorkoutCardStyles.css'

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-container">
      <div className="workout-card">
        <h3>{workout.name}</h3> {/* Will be workout.name */}
        {/* Will be workout.exercises.name or whatever correct db path is. Will be a map function that will
        insert however many exercises are in the workout. */}
        {workout.exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <p>{exercise.name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutCard