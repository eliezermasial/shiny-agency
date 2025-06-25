import { useContext } from "react";
import {AnswerSurveyContext} from '../../utils/Context'; 


function Results () {
    const {answer} = useContext(AnswerSurveyContext);
    console.log(answer);
    return (
        <div>
            <h1>Resultat </h1>
        </div>
    )
}

export default Results;