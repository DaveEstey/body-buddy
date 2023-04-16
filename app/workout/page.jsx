'use client';

import { useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import Hero from '../assets/barbell.jpg';
import './WorkoutStyles.css';
import Image from 'next/image';

const WorkoutPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [repo, setRepo] = useState([]);

  const handleSearch = async () => {
    if (!searchInput) return;
    const userInput = searchInput.trim();
    const data = await fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=${userInput}`,
      {
        headers: { 'X-Api-Key': 'G2eNCdx3VuH8TLfQGT8EpQ==KhaMg8wKYcZYoA40' },
      }
    );
    const repoData = await data.json();
    setRepo(repoData);
  };

  return (
    <div className="workout-page">
      <div>
        <Image className="planner-hero" src={Hero} alt="Loading a heavy barbell." />
      </div>
      <div className="workout-container">
        <div className="col-1">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search exercises"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="col-2">
          <div className="exercises">
            {repo && repo.map((val, index) => {
              return (
                <ExerciseCard key={index} name={val.name} type={val.type} muscle={val.muscle} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;