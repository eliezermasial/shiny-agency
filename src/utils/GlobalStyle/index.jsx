import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context';
import colors from '../Style/colors';

const StyledGlobalStyle = createGlobalStyle`
  * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : '#FFFFFF')};
        color: ${({ isDarkMode }) => (isDarkMode ? colors.secondary : colors.secondary)};
        transition: background-color 0.3s ease, color 0.3s ease;
    }
`

function GlobalStyle() {

    const { theme } = useContext(ThemeContext);
    const isDarkMode = theme === 'dark';

    return <StyledGlobalStyle isDarkMode={isDarkMode} />
}

export default GlobalStyle
