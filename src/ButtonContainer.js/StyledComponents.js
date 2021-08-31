import styled from 'styled-components/macro'

export const ButtonListContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 40%;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const ButtonImage = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
