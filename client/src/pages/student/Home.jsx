import React from 'react';
import Companies from '../../componentes/student/Companies';
import CourseSection from '../../componentes/student/CourseSection';
import Hero from '../../componentes/student/Hero';

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero />
            <Companies />
            <CourseSection />
        </div>
    )
}

export default Home;