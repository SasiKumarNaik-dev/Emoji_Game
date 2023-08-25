// Write your code here.
import './index.css'

import NavBar from '../NavBar'

const WinOrLoseCard = props => {
  const {status, resetGame, score} = props
  const playAgain = () => {
    resetGame()
  }

  return (
    <>
      <NavBar />
      <div className="result-section">
        {status === 'lost' ? (
          <div className="r-div">
            <div className="r-content">
              <h1 className="result-heading">You Lose</h1>
              <p className="score-title">Score</p>
              <p className="r-score">{score}/12</p>
              <button type="button" className="try-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
            <div className="r-img-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="lose"
                className="result-img-style"
              />
            </div>
          </div>
        ) : (
          <div className="r-div">
            <div className="r-content">
              <h1 className="result-heading">You Won</h1>
              <p className="score-title">Best Score</p>
              <p className="r-score">{score}/12</p>
              <button type="button" className="try-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
            <div className="r-img-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win"
                className="result-img-style"
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WinOrLoseCard
