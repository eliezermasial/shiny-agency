import Styled from 'styled-components';
//import { useParams } from 'react-router-dom'
import colors from '../../utils/Style/colors';
import DefaultPicture from '../../assets/profil.jpg';

const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backgroundLight};
    padding: 50px;
    margin: 50px;
    gap: 50px;
    min-height: 400px;
    box-sizing: border-box;
    flex-wrap: wrap;
`

const PictureWrapper = Styled.div`
    flex-shrink: 0;
    padding: 10px;
    
    img {
        border-radius: 50%;
        object-fit: cover;
        width: 205px;
        height: 205px;
        border: 4px solid ${colors.primary};
    }
`

const InfoBlock = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 25px;
  color: ${colors.secondary};
`

const NameSection = Styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', sans-serif;
    line-height: 100%;
    font-weight: 700;

    h1 {
        margin-bottom: 25px;
        font-size: 31px;
        letter-spacing: 0;

        span{
            font-size: 16px;
            color: ${colors.coolGray};
        }
    }

    span {
        font-size: 25px;
    }
`

const SkillsSection = Styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    span {
        width: 73px;
        background-color: ${colors.primary};
        padding: 6px 12px;
        border-radius: 20px;
        border: solid 1px ${colors.secondary};
        font-size: 14px;
    }
`

const StatusSection = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    
    span {
        font-weight: bold;
    }
`

function Profil() {

  return (
    <Container>
      <PictureWrapper>
        <img src={DefaultPicture} alt={DefaultPicture} />
      </PictureWrapper>

      <InfoBlock>
        <NameSection>
          <h1>John Doe Paris <span>Paris, France</span> </h1>
          <span>Développeur front-end</span>
        </NameSection>

        <SkillsSection>
            <span>Réagir</span>
            <span>JavaScript</span>
            <span>CSS</span>
        </SkillsSection>

        <StatusSection>
          <span>Indisponible</span>
          <span>500 € / jour</span>
        </StatusSection>
      </InfoBlock>
    </Container>
  )
}

export default Profil
