import React from 'react';
import CallToAction from '../../componentes/student/CallToAction';
import Companies from '../../componentes/student/Companies';
import CourseSection from '../../componentes/student/CourseSection';
import Footer from '../../componentes/student/Footer';
import Hero from '../../componentes/student/Hero';
import Testimonialsection from '../../componentes/student/Testimonialsection';

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero />
            <Companies />
            <CourseSection />
            <Testimonialsection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home;