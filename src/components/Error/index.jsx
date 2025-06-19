import Styled from 'styled-components';
import colors from '../../utils/Style/colors';
import ImgNotFound from '../../assets/notFound.svg';

const Container = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    padding: 50px;
    padding-bottom: 100px;
    margin: 50px;
    background-color: ${colors.backgroundLight};
    min-height: 80vh;
    box-sizing: border-box;
`

function Error() {
    return (
        <Container>
            <h1>Oups....! 🙈</h1>

            <div>
                <img src={ImgNotFound} alt="flag not found" />
            </div>

            <p>Il semblerait qu’il y ait un problème</p>
        </Container>
    )
}
 
export default Error