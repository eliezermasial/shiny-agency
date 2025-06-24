import Styled from 'styled-components';
//import { useState } from 'react';
import colors from '../../utils/Style/colors';
import homeFlag from '../../assets/home-flag.svg';


const Container = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  padding-bottom: 100px;
  margin: 50px;
  background-color: ${colors.backgroundLight};
  min-height: 80vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
    padding: 30px 15px;
    gap: 40px;
  }
`;

const Block = Styled.div`
  width: 541px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Title = Styled.h1`
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 161%;
  letter-spacing: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 140%;
  }
`;

const Image = Styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ButtonTest = Styled.button`
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

    ${(props) =>
      props.$bgBotton && `background: ${colors.violetMain}; color: ${colors.primary};`}

    &:hover {
      color: ${colors.primary};
      opacity: 0.85;
      transform: scale(1.03);
      transition: 0.3s ease;
    };

    @media (max-width: 768px) {
      width: 100%;
      max-width: 260px;
    }
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
