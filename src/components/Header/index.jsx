import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="">accueil</Link>
            <Link to="/survey/42">questionnaires</Link>
        </nav>
    )
}

export default Header;