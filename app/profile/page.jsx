import './ProfilePageStyles.css'

const ProfilePage = () => {
  return (
    <div>
      <div className="top-bar">
        <h1>User Name</h1> {/* will be user.name for database call  */}
        <div className='stats-container'>
          <div className="stats">
            <h2>37</h2> {/* will be user.age for database call  */}
            <h2>194 cm</h2> {/* will be user.height for database call  */}
            <h2>84 kg</h2> {/* will be user.weight for database call  */}
          </div>
          <div className="stats">
            <h4>Age</h4>
            <h4>Height</h4>
            <h4>Weight</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage