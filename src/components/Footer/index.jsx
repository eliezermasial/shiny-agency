import Styled from 'styled-components';
import colors from '../../utils/Style/colors';
import { useThem } from '../../utils/Hooks';

const FooterContainer = Styled.footer`
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 20px 0px 50px 0;
`
const NightModeButton = Styled.button`
    display: flex;
    border: none;
    color: ${(props) => (props.themeMode === 'dark' ? colors.backgroundLight : colors.coolGray)};
    cursor: pointer;
    background-color: transparent;
`
function Footer () {

    const {toggleTheme,theme} = useThem();
    
    return (
        <FooterContainer>
            <NightModeButton themeMode={theme} onClick={()=>toggleTheme()}>
                Changer de mode : { theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;