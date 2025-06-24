import { Link } from 'react-router-dom';
import Styled, {keyframes} from 'styled-components';
import logoLight from '../../assets/shiny-logo_shiny-logo-light 1.svg';
import logoDark from '../../assets/shiny-logo_shiny-logo-dark 1.svg';
import colors from '../../utils/Style/colors';
import { useState, useContext } from 'react';
import {ThemeContext} from '../../utils/Context';


const StyleNav = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin: 0 50px;
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

  @media (max-width: 768px) {
    display: none
  }
`

const StyledLink = Styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0;
  font-family: 'Trebuchet MS', sans-serif;
  color: ${(props) => (props.$colorLinks === 'dark' ? colors.backgroundLight : colors.coolGray)};

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

const MobileMenu = Styled.div`
  display: ${(openMenu) => openMenu ? 'flex' : 'none'};
  top: 20%;
  left: 50px;
  right: 0;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
  width: 50%;
  list-style: none;
  padding: 20px;
  position: absolute;
  background: ${colors.coolGray};

  Link {
    text-decoration: none;
  }
`
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(80deg);
    }
`
const ButtonMobile = Styled.button`
  display: none;
  cursor: pointer;
  
  border: 1px solid ${colors.violetMain};
  border-raduis: 30px;
  padding: 1px;
  text-align: center;
  animation: ${spin} 2s linear infinite;

  svg {
    width: 40px;
    stroke: ${colors.violetMain};
  }

  &:hover {
    opacity: 0.85;
    transform: scale(1.03);
    transition: 0.3s ease;
    animation: none;
  };

  @media (max-width: 768px) {
    display: flex;
  }
`

function Header() {

  const [openMenu, setOpenMenu ] = useState(false);
  const {theme} = useContext(ThemeContext);
  
  return (
    <StyleNav>
      <LogoContainer>
        <Link to="/logo">
          <Logo src={theme === 'dark' ? logoDark : logoLight} alt="Logo Shiny Agency" />
        </Link>
      </LogoContainer>

      <NavLinks>
        <StyledLink to="/" $colorLinks={theme}> Accueil </StyledLink>
        <StyledLink to="/freelances" $colorLinks={theme}> Profils </StyledLink>
        <StyledFreelanceLink to="/quiz" $bgBotton> faire le test </StyledFreelanceLink>
      </NavLinks>

      <ButtonMobile onClick={()=>setOpenMenu(open => !open)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </ButtonMobile>
      
      {openMenu && (
        <>
          <MobileMenu>
            <Link> Accueil </Link>
            <Link> Profils </Link>
            <Link> Faire le tes </Link>
          </MobileMenu>
        </>
      )}
    </StyleNav>
  )
}

export default Header
