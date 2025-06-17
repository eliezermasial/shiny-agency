import { useParams } from "react-router-dom";

function Survey () {
    const {questNbr} = useParams();

    return (
    <div>
      <h1>Welcome to the survery Page</h1>
      <p>This is the home page of our application.{questNbr} </p>
    </div>
  );
}

export default  Survey;