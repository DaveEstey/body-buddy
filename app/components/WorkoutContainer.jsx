import WorkoutCard from './WorkoutCard';
import './WorkoutContainerStyles.css';

const WorkoutContainer = () => {
  return (
    <div className="sample-workouts">
      <h1>View Sample Workouts</h1>
      <div className="workout-card-container">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
    </div>
  )
}

export default WorkoutContainer