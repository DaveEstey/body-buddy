import React from 'react'

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
    <div>
      <h1>{repo.map((repo)=> repo.name)}</h1>
    </div>
  )
}

export default WorkoutPage
export { fetchRepo };

