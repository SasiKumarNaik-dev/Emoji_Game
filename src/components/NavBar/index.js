// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return score === undefined ? (
    <div className="nav-bar">
      <div className="game-name-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="log-img"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <div className="game-name-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="log-img"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      <div className="score-div">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
