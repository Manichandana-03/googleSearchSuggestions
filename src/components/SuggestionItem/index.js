// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, addToSearchBar} = props
  const {suggestion} = suggestionItem
  const onClickArrow = () => {
    addToSearchBar(suggestion)
  }
  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
