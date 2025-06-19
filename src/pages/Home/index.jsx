import Styled from 'styled-components';
//import { useState } from 'react';
import colors from '../../utils/Style/colors';
import homeFlag from '../../assets/home-flag.svg';

const Container = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  background-color: ${colors.backgroundLight};
  min-height: 80vh;
  box-sizing: border-box;
`

const Block = Styled.div`
  width: 541px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = Styled.h1`
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 161%;
  letter-spacing: 0;
  margin: 0;
`

const Image = Styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`
const ButtonTest= Styled.button`
  width: 261px;
  color: white;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  font-family: 'Comfortaa', cursive;
  border: none;
  border-radius: 29px;
  cursor: pointer;
  
  ${(props) => props.$bgBotton && `background: ${colors.violetMain}; color: ${colors.primary};`}

  &:hover {
    color: ${colors.primary};
    opacity: 0.85;
    transform: scale(1.03);
    transition: 0.3s ease;
  };
`
function Home() {
  return (
    <Container>
      <Block>
        <Title>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </Title>
        
        <ButtonTest $bgBotton>faire le test</ButtonTest>
      </Block>
      <Block>
        <Image src={homeFlag} alt="Illustration accueil" />
      </Block>
    </Container>
  )
}

export default Home
