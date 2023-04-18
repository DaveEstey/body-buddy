'use client';

import { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutContainerStyles.css';

const WorkoutContainer = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('/api/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data.workouts))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  // Limit the number of workouts to display
  const displayedWorkouts = workouts.slice(0, 3);

  return (
    <div className="sample-workouts">
      <h1>View Sample Workouts</h1>
      <div className="workout-card-container">
        {displayedWorkouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutContainer;