import PropTypes from "prop-types";
import Styled from "styled-components";
import DefaultPicture from '../../assets/profil.jpg';
import colors from '../../utils/Style/colors.js';

// === Typage des props
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

// === Valeurs par défaut
Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

const CardWrapper = Styled.div`
  width: 339px;
  height: 325px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  background-color: ${colors.backgroundLight};
  border: ${colors.backgroundLight} solid 1px;
  transition: box-shadow 200ms, border 200ms;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
    border: ${colors.violetMain} solid 1px;
    border-radius: 30px;
  }
`

const CardLabel = Styled.span`
  color: ${colors.violetMain};
  font-size: 22px;
  font-weight: bold;
`

const BlockImgDesc = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const CardPicture = Styled.img`
  width: 148px;
  height: 148px;
  border-radius: 50%;
  object-fit: cover;
`

const CardTitle = Styled.span`
  color: ${colors.secondary};
  font-size: 25px;
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <BlockImgDesc>
        <CardPicture src={picture} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </BlockImgDesc>
    </CardWrapper>
  )
}

export default Card;
