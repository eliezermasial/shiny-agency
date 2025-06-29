import { useState, createContext, useEffect } from 'react';

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

    const [answers, setAnswer] = useState(()=> {
        const storadAnswers =  localStorage.getItem('answers');
        return storadAnswers ? JSON.parse(storadAnswers) : {};
    });

    useEffect(() => {

        localStorage.setItem('answers', JSON.stringify(answers));
        
    }, [answers]);

    const saveAnswers = (newAnswers) => {

       setAnswer(prev => ({...prev,...newAnswers}));
    }

    return (
        <AnswerSurveyContext.Provider value={{answers,saveAnswers}}>
            {children}
        </AnswerSurveyContext.Provider>
    )
}
