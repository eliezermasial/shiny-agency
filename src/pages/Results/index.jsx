import { useContext } from "react";
import {AnswerSurveyContext} from '../../utils/Context'; 
import { useFetch } from "../../utils/Hooks";
import Styled, {keyframes} from "styled-components";
import colors from '../../utils/Style/colors';

const Container = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    padding-bottom: 100px;
    margin: 50px;
    gap: 80px;
    color: ${colors.coolGray};
    min-height: 80vh;
    box-sizing: border-box;
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

function Results () {
    
    const {answers} = useContext(AnswerSurveyContext);
    const queryParams = Object.entries(answers).map(([key,value]) => `a${key}=${value}`).join('&');
    const url= `http://localhost:8000/results/?${queryParams}`
    const {data: resultData,loading,error} = useFetch(url);
   
    return (
        <Container>
            {loading && <Spinner />}

            {!loading && error && <span>Erreur de chargement</span>}

            {!loading && !error && (
                <>
                <h1>Résultats</h1>
                {Array.isArray(resultData) && resultData.length > 0 ? (
                    <ul>
                        {resultData.map((result, index) => (
                            <li key={`${result.id}-${index}`}>
                            <strong>{result.title}</strong><br />
                            <span>{result.description}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun résultat</p>
                )}
                </>
            )}
        </Container>

    )
}

export default Results;