import  {useState, useEffect, createContext} from 'react'
import { fetchDataFromApi } from '../utils/api';


export const Context = createContext();

export const AppContext= (props) =>{
    const [loading, setLoading]= useState(false)
    const [searchResults, setSearchResults]= useState(false)
    const [selectCategories, setselectCategories]= useState(false)
    const [mobileMenu, setmobileMenu]= useState(false)

    useEffect(() =>{
        fetchSelectCategoriesData(selectCategories)

    },[selectCategories])

    const fetchSelectCategoriesData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            console.log(res);
            setLoading(false)
        })

    }

    return (
        <Context.Provider value={
            {
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategories,
                setselectCategories,
                mobileMenu,
                setmobileMenu
            }
        }>
        {props.children}

        </Context.Provider>
    )
}

