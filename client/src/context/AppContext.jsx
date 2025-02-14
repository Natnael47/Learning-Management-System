import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const Currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);

    // Set all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses();
    }, [])

    //function to calculate average rating for all courses
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });
        return totalRating / course.courseRatings.length;
    }

    const value = {
        Currency, navigate,
        allCourses,
        fetchAllCourses, calculateRating,
        isEducator, setIsEducator
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}