import { useState, useEffect, useContext } from "react";
import Awaiting from "../Awaiting";
import {ThemeContext} from '../Context';


export function useThem () {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme};
}

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        async function fetchData () {

            try {

                setLoading(true);
                await Awaiting(2000)

                const respons = await fetch(url);
                const dataJson = await respons.json();
                console.log('Réponse complète de l’API :', dataJson); 

                if (Array.isArray(dataJson)) {

                    setData(dataJson);

                } else if (Array.isArray(dataJson.results)) {

                        setData(dataJson.results)

                } else if (Array.isArray(dataJson.freelancersList)) {

                        setData(dataJson.freelancersList)

                } else if (dataJson.surveyData && typeof dataJson.surveyData === 'object') {

                    // Transforme en tableau d'objets [{question: '...'}]
                    const questionsArray = Object.values(dataJson.surveyData).map((question) => ({
                       question,
                    }));

                    setData(questionsArray);

                } else {
                    setData([]);
                }

            } catch (error) {
                
                setError('impossible de recuperer les données de API');

            } finally {

                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    return {data,loading,error};
    
}