import Styled from 'styled-components';
import colors from '../../utils/Style/colors';
import { Link } from 'react-router-dom';


const Container = Styled.div`
    gap: 50px;
    display: flex;
    padding: 50px;
    font-size: 20px;
    font-weight: 400;
    min-height: 80vh;
    line-height: 100%;
    align-items: center;
    padding-bottom: 100px;
    flex-direction: column;
    box-sizing: border-box;
    margin: 50px 0 50px 50px;
    justify-content: space-around;
    font-family: 'Trebuchet MS', sans-serif;
`

const BlockTop = Styled.div`
    text-align: center;
`

const TitleContainer = Styled.div`
  display: inline-block;
`

const Title = Styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  line-height: 161%;
  font-family: 'Comfortaa', sans-serif;
`

const BarViolet = Styled.hr`
  width: 100%;
  height: 4px;
  border:  none;
  margin: 8px 0 0 0;
  background-color: ${colors.violetMain};
`

const Paragraph = Styled.p`
    margin-bottom: 26px;
`

const ButtomQuiz = Styled.div`
    gap: 20px;
    padding: 2px;
    display: flex;
    text-align: center;
    justify-content: space-between;
`

const Button = Styled.button`
    width: 280px;
    height: 96px;
    border: none;
    font-size: 25px
    cursor: pointer;
    font-bold: bold;
    font-weight: 700;
    border-radius:  31px ;
    background-color: ${colors.backgroundLight};

    &:hover{
        border:  solid 2px ${colors.violetMain} ;
        border-radius:  0;
    }
`

const ButtonOui = Styled(Button)`
    border-radius: 31px;
    border:  solid 2px ${colors.violetMain};

    &:hover{
        border-radius:  31px ;
    }
`

const ButtomOption = Styled.div`
    width: 170px;
    display: flex;
    font-size: 18px;
    margin-top: 10px;
    justify-content: space-between;
`

const StyleLink = Styled(Link)`
    color: ${colors.secondary};

    &:hover {
        color: ${colors.violetMain};
    }
`

function Quiz() {
    return (
        <Container>

            <BlockTop>
                <TitleContainer>
                    <Title> Question 1 </Title>
                    <BarViolet />
                </TitleContainer>
                <Paragraph>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</Paragraph>
            </BlockTop>

            <ButtomQuiz>
                <ButtonOui> Oui </ButtonOui>
                <Button> Non </Button>
            </ButtomQuiz>

            <ButtomOption>
                <StyleLink to="/"> Precedent </StyleLink>
                <StyleLink to="/"> Next </StyleLink>
            </ButtomOption>

        </Container>
    )
}

export default Quiz;