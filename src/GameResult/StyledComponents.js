import styled from 'styled-components/macro'

export const ResultViewMainContainer = styled.div`
  width: 70%;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const YouOpponentContainer = styled.div`
  display: flex;
`
export const YouContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const OpponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ResultImg = styled.img`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const ResultBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlayAgainBtn = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 12px;
`
