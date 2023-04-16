import ExerciseCard from '../components/ExerciseCard'

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
    <div className="workout-container">
      <div className="exercises">
        {repo.map((val, index) => {
          return(
            <ExerciseCard
              key={index}
              name={val.name}
              type={val.type}
              muscle={val.muscle}
            />
          )
        })}
      </div>
    </div>  
  )
}

export default WorkoutPage
export { fetchRepo };