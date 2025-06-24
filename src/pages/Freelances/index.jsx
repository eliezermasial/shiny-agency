import Styled, {keyframes} from 'styled-components';
import colors from '../../utils/Style/colors';
import Card from '../../components/Card/';
import DefaultPicture from '../../assets/profil.jpg';
import { Link } from 'react-router-dom';
import Attend from '../../utils/Attend';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../utils/Context';


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

const TitleContainer = Styled.div`
    display: inline-block;
    text-align: center;
`

const Title = Styled.h1`
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 133%;
    letter-spacing: 0;
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.secondary)};
    margin: 0;
`

const Paragraph = Styled.p`
    font-weight: 700;
    line-height: 133%;
    letter-spacing: 0;
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.coolGray)};
`

const BlockCard = Styled.div`
    gap: 30px;
    width: 100%;
    display: grid;
    max-width: 1000px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
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

function Freelances() {
    const {theme} = useContext(ThemeContext);
    const [freelanceProfiles, setFreelances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getFreelancesByFetch () {
            try {
                setLoading(true);
                await Attend(2000);

                const respons = await fetch('http://localhost:8000/freelances');
                const data = await respons.json();

                setFreelances(data.freelancersList || []);

            } catch (error) {

                setError(error);

            } finally {
                setLoading(false);
            }
        }

        getFreelancesByFetch();

    }, []);
    
    return (
        <Container>

            {loading && <Spinner />}
            {!loading && error && <span > erreur de chargement </span>}

            {!loading && !error && (
                <>
                    <TitleContainer>
                        <Title themeMode={theme}>Trouvez votre prestataire</Title>
                        <Paragraph themeMode={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</Paragraph>
                    </TitleContainer>

                    <BlockCard>
                        {freelanceProfiles.map((profil, index) => (
                            <Link to={`/profil/${profil.id}`} key={`${profil.name} - ${index}`} style={{ textDecoration: 'none' }}>
                                <Card 
                                    label={profil.name}
                                    title={profil.job}
                                    picture={profil.picture || DefaultPicture}
                                />
                            </Link>
                        ))}
                    </BlockCard>
                </>
            )}

        </Container>
    )
}

export default Freelances;