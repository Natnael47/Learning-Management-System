import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Loading from './componentes/student/Loading'
import Navbar from './componentes/student/Navbar'
import AddCourses from './pages/educator/AddCourse'
import Dashboard from './pages/educator/Dashboard'
import Educator from './pages/educator/Educator'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentsEnrolled'
import CourseDetailes from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import Home from './pages/student/Home'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetailes />} />
        <Route path='/my-enrollment' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourses />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App