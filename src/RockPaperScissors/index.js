import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ButtonContainer from '../ButtonContainer.js'
import GameResult from '../GameResult'

import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  ScoreCardContainer,
  ContentContainer,
  ContentHeading,
  ScoreContentContainer,
  ScoreParaOne,
  ScoreParaTwo,
  ButtonUl,
  PopupContainer,
  PopupBtn,
  RulesImgContainer,
  RulesImg,
  CloseBtnContainer,
  CloseBtn,
} from './StyledComponents'

class RockPaperScissors extends Component {
  state = {
    isPlaying: false,
    myChoice: {},
    systemChoice: {},
    score: 0,
    resultText: '',
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: false})
  }

  onGetGame = (id, image) => {
    const {choicesList} = this.props
    const randomSelection = Math.floor(Math.random() * choicesList.length)

    if (choicesList[randomSelection].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        resultText: 'YOU LOSE',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'PAPER'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        resultText: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'PAPER' &&
      id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        resultText: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'ROCK'
    ) {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        resultText: 'YOU WON',
      }))
    } else {
      this.setState({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        resultText: 'IT IS DRAW',
      })
    }
  }

  onRenderResultView = () => {
    const {myChoice, systemChoice, resultText} = this.state
    const {id, image} = systemChoice
    return (
      <GameResult
        myChoice={myChoice}
        systemChoice={systemChoice}
        resultText={resultText}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onRenderButtonView = () => {
    const {choicesList} = this.props

    return (
      <ButtonUl>
        {choicesList.map(each => (
          <ButtonContainer
            key={each.id}
            buttonItems={each}
            onGetGame={this.onGetGame}
          />
        ))}
      </ButtonUl>
    )
  }

  render() {
    const {score, isPlaying} = this.state
    return (
      <MainContainer>
        <ScoreCardContainer>
          <ContentContainer>
            <ContentHeading>
              ROCK <br />
              PAPER
              <br />
              SCISSORS
            </ContentHeading>
          </ContentContainer>
          <ScoreContentContainer>
            <ScoreParaOne>Score</ScoreParaOne>
            <ScoreParaTwo>{score}</ScoreParaTwo>
          </ScoreContentContainer>
        </ScoreCardContainer>
        {isPlaying ? this.onRenderResultView() : this.onRenderButtonView()}

        <PopupContainer>
          <Popup
            modal
            trigger={
              <PopupBtn type="button" position="right center">
                RULES
              </PopupBtn>
            }
          >
            {close => (
              <RulesImgContainer>
                <CloseBtnContainer onClick={() => close()} type="button">
                  <CloseBtn>
                    <RiCloseLine />
                  </CloseBtn>
                </CloseBtnContainer>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
