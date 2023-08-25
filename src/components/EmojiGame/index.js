/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, list: [], status: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getDetailsOfEmoji = id => {
    this.setState(prevState => {
      const fId = prevState.list.find(eachItem => eachItem === id)
      if (fId === undefined) {
        const newList = [...prevState.list, id]
        return {
          list: newList,
          score: prevState.score + 1,
          status: prevState.score === 11 ? 'won' : '',
          topScore: prevState.score === 11 ? 0 : prevState.topScore,
        }
      }
      return {
        list: [],
        status: 'lost',
      }
    })
  }

  resetGame = () => {
    this.setState(prevState => ({
      status: '',
      score: 0,
      list: [],
      topScore:
        prevState.score > prevState.topScore && prevState.score !== 12
          ? prevState.score
          : prevState.topScore,
    }))
  }

  render() {
    const {score, topScore, status} = this.state
    const shuffledList = this.shuffledEmojisList()
    return status === '' ? (
      <div className="game-page">
        <NavBar score={score} topScore={topScore} />
        <div className="game-section">
          <ul className="game-div">
            {shuffledList.map(eachItem => (
              <EmojiCard
                item={eachItem}
                key={eachItem.id}
                getDetailsOfEmoji={this.getDetailsOfEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="game-page">
        <WinOrLoseCard
          status={status}
          score={score}
          resetGame={this.resetGame}
        />
      </div>
    )
  }
}

export default EmojiGame
