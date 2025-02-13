import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const Currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);

    // Set all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses();
    }, [])

    const value = {
        Currency, navigate,
        allCourses,
        fetchAllCourses
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}