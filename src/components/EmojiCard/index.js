// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {item, getDetailsOfEmoji} = props
  const {emojiName, emojiUrl, id} = item

  const getEmoji = () => {
    getDetailsOfEmoji(id)
  }

  return (
    <li className="emoji-div">
      <button type="button" className="emoji-btn" onClick={getEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
