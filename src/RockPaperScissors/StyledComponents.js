import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreCardContainer = styled.div`
  margin-top: 20px;
  border: 2px solid #ffffff;
  width: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`
export const ContentContainer = styled.div`
  width: 20%;
`
export const ContentHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ScoreContentContainer = styled.div`
  background-color: #ffffff;
  width: 20%;
  height: 72%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    height: 85%;
    border-radius: 10px;
  }
`
export const ScoreParaOne = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ScoreParaTwo = styled.p`
  color: #223a5f;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ButtonUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px;
  width: 90%;
  height: 40%;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 20%;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const PopupBtn = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  text-align: right;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const RulesImgContainer = styled.div``

export const RulesImg = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`
