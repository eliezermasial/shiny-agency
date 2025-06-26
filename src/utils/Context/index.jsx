import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark':'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const AnswerSurveyContext = createContext();

export const SurveyProvider = ({children}) => {
    const [answers, setAnswer] = useState({});

    const saveAnswers = (newAnswers) => {
        setAnswer(prev => ({...prev,...newAnswers}));
        console.log(answers);
    }

    return (
        <AnswerSurveyContext.Provider value={{answers,saveAnswers}}>
            {children}
        </AnswerSurveyContext.Provider>
    )
}
