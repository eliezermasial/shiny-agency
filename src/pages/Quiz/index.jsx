import Styled, {keyframes} from 'styled-components';
import colors from '../../utils/Style/colors';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/Context';
import {AnswerSurveyContext} from '../../utils/Context';
import { useFetch } from '../../utils/Hooks';


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
  color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.secondary)};
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
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.coolGray)};
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
    background-color: ${(props) => (props.themeMode === 'dark' ? colors.coolGray : colors.backgroundLight)};
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.secondary)};
    box-shadow: ${(props) =>props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};

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
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.secondary)};

    &:hover {
        color: ${colors.violetMain};
    }
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = Styled.div`
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top: 6px solid ${colors.violetMain};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin: auto;
`


function Quiz() {

    const {questNombre} = useParams();
    const questNombreInt = parseInt(questNombre);
    const precQuest = questNombreInt === 1 ? 1 : questNombreInt - 1;
    const questNext = questNombreInt + 1;
    console.log(questNombre);
    
    const {theme} = useContext(ThemeContext);
    const {saveAnswers,answers} = useContext(AnswerSurveyContext);

    const {data: results,loading,error} = useFetch('http://localhost:8000/survey');
    console.log(results)

    function saveReplay(answers) {

        saveAnswers({[questNombre]: answers})
    }
    
    return (
        
        <Container>

            { loading && <Spinner />}
            { !loading && error && <span> echeque de chargement </span> }

            { !loading && !error && (
                <>
                    <BlockTop>
                        <TitleContainer>
                            <Title themeMode={theme}> Question {questNombreInt} </Title>
                            <BarViolet />
                        </TitleContainer>
                        <Paragraph themeMode={theme}>{results[questNombreInt - 1]?.question || "Question non trouvée"} </Paragraph>
                    </BlockTop>

                    <ButtomQuiz>
                        <ButtonOui onClick={()=>saveReplay(true)} isSelected={answers[questNombre] === true} themeMode={theme}> Oui </ButtonOui>
                        <Button onClick={()=>saveReplay(false)} isSelected={answers[questNombre] === false}  themeMode={theme}> Non </Button>
                    </ButtomQuiz>

                    <ButtomOption>
                        <StyleLink to={`/Quiz/${precQuest}`} themeMode={theme}> Precedent </StyleLink>
                        <StyleLink to={`/Quiz/${questNext}`} themeMode={theme}> Next </StyleLink>
                    </ButtomOption>
                </>
            )}
        </Container>
    )
    
}

export default Quiz;