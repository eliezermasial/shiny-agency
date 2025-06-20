import Styled from 'styled-components';
import colors from '../../utils/Style/colors';
import Card from '../../components/Card/';
import DefaultPicture from '../../assets/profil.jpg';
import { Link } from 'react-router-dom';
 
const freelanceProfiles = [
    {
        id: 'jane-doe',
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        id: 'john-doe',
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        id: 'jeanne-biche',
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        id: 'eliezer-biche',
        name: 'Eliezer Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    

];

const Container = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    padding-bottom: 100px;
    margin: 50px;
    gap: 80px;
    color: ${colors.textSecondary};
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
    color: ${colors.secondary};
    margin: 0;
`

const Paragraph = Styled.p`
    font-weight: 700;
    line-height: 133%;
    letter-spacing: 0;
`

const BlockCard = Styled.div`
    gap: 30px;
    width: 100%;
    display: grid;
    max-width: 1000px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    return (
        <Container>

            <TitleContainer>
                <Title>Trouvez votre prestataire</Title>
                <Paragraph>Chez Shiny nous réunissons les meilleurs profils pour vous.</Paragraph>
            </TitleContainer>

            <BlockCard>
                {freelanceProfiles.map((profil, index) => (
                    <Link to={`/profil/${profil.id}`} key={`${profil.name} - ${index}`} style={{ textDecoration: 'none' }}>
                        <Card 
                            label={profil.name}
                            title={profil.jobTitle}
                            picture={profil.picture}
                        />
                    </Link>
                ))}
            </BlockCard>

        </Container>
    )
}

export default Freelances;