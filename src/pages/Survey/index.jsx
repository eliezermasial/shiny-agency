import { Link, useParams } from "react-router-dom";

function Survey () {
    const {questNbr} = useParams();
    const questInt = parseInt(questNbr);
    const preQuest = questInt === 1 ? 1 : questInt - 1;
    const NextQuest = questInt + 1;

    return (
    <div>
      <h1>Welcome to the survery Page</h1>
      <p>question: {questNbr} </p>
      <Link to={`/survey/${preQuest}`}>Question précédente</Link>
      {questInt === 10 ? (
        <Link to="/results">Voir les résultats</Link>
      ) : (
        <Link to={`/survey/${NextQuest}`}>Question suivante</Link>
      )}
    </div>
  );
}

export default  Survey;