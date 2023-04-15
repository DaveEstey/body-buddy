import './WorkoutCardStyles.css'

const WorkoutCard = () => {
  return (
    <div className="workout-container">
      <div className="workout-card">
        <h3>Workout Name</h3> {/* Will be workout.name */}
        {/* Will be workout.exercises.name or whatever correct db path is. Will be a map function that will
        insert however many exercises are in the workout. */}
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
        <div className="exercise">
          <p>Exercise Name</p>
          <p>Sets</p>
          <p>Reps</p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutCard