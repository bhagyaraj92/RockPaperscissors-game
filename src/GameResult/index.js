import {
  ResultViewMainContainer,
  YouOpponentContainer,
  YouContainer,
  OpponentContainer,
  ResultText,
  ResultImg,
  ResultBtnContainer,
  PlayAgainBtn,
} from './StyledComponents'

const GameResult = props => {
  const {myChoice, systemChoice, resultText, playAgain} = props
  const {id, image} = systemChoice

  const onClickPlayAgainBtn = () => {
    playAgain()
  }

  return (
    <ResultViewMainContainer>
      <YouOpponentContainer>
        <YouContainer>
          <ResultText>You</ResultText>
          <ResultImg src={myChoice[1]} alt="your choice" />
        </YouContainer>
        <OpponentContainer>
          <ResultText>Opponent</ResultText>
          <ResultImg src={image} alt="opponent choice" />
        </OpponentContainer>
      </YouOpponentContainer>
      <ResultBtnContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainBtn onClick={onClickPlayAgainBtn} type="button">
          PLAY AGAIN
        </PlayAgainBtn>
      </ResultBtnContainer>
    </ResultViewMainContainer>
  )
}
export default GameResult
