import PropTypes from "prop-types";
import Styled from "styled-components";
import DefaultPicture from '../../assets/logo1.png';
import colors from '../../utils/Style/colors.js';

// Define the Card component that takes label, title, and picture as props
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

// Set default props for the Card component
Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

const CardLabel =  Styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold`;

const CardTitle = Styled.span`color: #000`;

const CardPicture = Styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;`;

const CardWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }`;

function Card({ label,title, picture }) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardWrapper>
                <CardLabel>{label}</CardLabel>
                <CardPicture src={picture} alt="freelance" height={80} width={80} />
                <CardTitle>{title}</CardTitle>
            </CardWrapper>
        </div>
    )
}

export default Card