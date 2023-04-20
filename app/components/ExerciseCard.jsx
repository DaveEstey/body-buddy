import "./ExerciseCardStyles.css";

const ExerciseCard = (props) => {
  const { handleCardClick, showButton, name, type, muscle} = props
  return (
    <button
      onClick={() => {
        handleCardClick(name), showButton(true);
      }}
    >
      <div className="exercise-card-container">
        <div className="exercise-card">
          <h1>{name}</h1>
          <h2>{type}</h2>
          <h2>{muscle}</h2>
        </div>
      </div>
    </button>
  );
};

export default ExerciseCard;
