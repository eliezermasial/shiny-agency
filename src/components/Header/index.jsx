import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import logo from '../../assets/shiny-logo_shiny-logo-light 1.svg'
import colors from '../../utils/Style/colors'

const StyleNav = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  border-bottom: 1px solid #e2e3e9;
  background-color: transparent;
`

const LogoContainer = Styled.div`
  display: flex;
  align-items: center;
`

const Logo = Styled.img`
  height: 60px;
`

const NavLinks = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  gap: 20px;
`

const StyledLink = Styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0;
  font-family: 'Trebuchet MS', sans-serif;
  ${(props) => props.$colorLinks && `color: ${colors.coolGray};`}

  &:hover {
    color: ${colors.violetMain};
  }
`

const StyledFreelanceLink = Styled(StyledLink)`
  padding: 10px 20px;
  text-align: center;
  border-radius: 29px;
  ${(props) => props.$bgBotton && `background: ${colors.violetMain}; color: ${colors.primary};`}

  &:hover {
    color: ${colors.primary};
    opacity: 0.85;
    transform: scale(1.03);
    transition: 0.3s ease;
  };
`

function Header() {
  return (
    <StyleNav>
      <LogoContainer>
        <Link to="/logo">
          <Logo src={logo} alt="Logo Shiny Agency" />
        </Link>
      </LogoContainer>

      <NavLinks>
        <StyledLink to="/" $colorLinks> Accueil </StyledLink>
        <StyledLink to="/survey" $colorLinks> Questionnaires </StyledLink>
        <StyledFreelanceLink to="/freelances" $bgBotton> Freelances </StyledFreelanceLink>
      </NavLinks>
    </StyleNav>
  )
}

export default Header
