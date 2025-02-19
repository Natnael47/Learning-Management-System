import humanizeDuration from 'humanize-duration';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const Currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const [enrolledCourse, setEnrolledCourse] = useState([]);

    // Set all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses();
        fetchUserEnrolledCourses();
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

    //Function to calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    }

    //Function to calculate course duration
    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration));
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    }

    //Function to calculate number of lecture
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures;
    }

    //Function to check if user is authenticated
    const isAuthenticated = (user) => {
        return user.token !== null;
    }

    //Function to log out use

    //Function to check if user is educator
    const checkEducator = (user) => {
        return user.roles.includes('educator');
    }

    //Function to toggle educator mode
    const toggleEducatorMode = () => {
        setIsEducator(!isEducator);
    }

    //Function to fetch user enrollment
    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourse(dummyCourses);
    }

    //Function to enroll course
    const enrollCourse = async (course, user) => {
        // Implement enroll course logic here
        setEnrolledCourse([...enrolledCourse, course]);
    }

    //Function to unenroll course
    const unenrollCourse = async (course, user) => {
        // Implement unenroll course logic here
        setEnrolledCourse(enrolledCourse.filter(c => c.id !== course.id));
    }

    //Function to calculate total course price
    const calculateTotalCoursePrice = (course) => {
        return course.coursePrice * (1 + course.discount / 100);
    }

    const value = {
        Currency, navigate,
        allCourses,
        fetchAllCourses, calculateRating,
        isEducator, setIsEducator,
        calculateChapterTime, calculateCourseDuration, calculateNoOfLectures,
        fetchUserEnrolledCourses, enrolledCourse
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}