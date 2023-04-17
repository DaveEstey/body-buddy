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
        headers: { 'X-Api-Key': 'WGoyifcVpn2C4Xum3XF7uw==zYQeXPtUXguKkvSj' },
      }
    );
    const repoData = await data.json();
    setRepo(repoData);

    console.log(repoData);
  };

  return (
    <div className="workout-page">
      <div>
        <Image className="planner-hero" src={Hero} alt="Loading a heavy barbell." priority />
      </div>
      <div className="workout-container">
        <div className="col-1"> 
          <div className="search-bar">
            <h2>Search the Exercise Database</h2>
            <h3>Enter a muscle group in the box below.</h3>
            <input
              className="ex-search"
              type="text"
              placeholder="Search exercises"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn full-rounded ex-button" type="submit" onClick={handleSearch}>
              <span>Search</span>
              <div className="border full-rounded"></div>
            </button>
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