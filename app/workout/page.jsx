import React from 'react'
// import ExerciseCard from '../components/ExerciseCard'

const fetchRepo = async () => {
    const userInput = 'biceps'

        const data = await fetch (`https://api.api-ninjas.com/v1/exercises?muscle=${userInput}`, 
        {
          headers: {'X-Api-Key': 'G2eNCdx3VuH8TLfQGT8EpQ==KhaMg8wKYcZYoA40'}
        })
        const repo = await data.json()
        return repo;
   
     
    }
const WorkoutPage = async () => {
 const repo = await fetchRepo();
 console.log(repo);
  return (
    <div className="container">
    
      {repo.map((repo) => (
       <div>
        <h1>{repo.name}</h1>
        <h2>{repo.type}</h2>
        <h2>{repo.muscle}</h2> 
        </div>
      ))
      }
      </div>
   
  )
}

export default WorkoutPage
export { fetchRepo };

