import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course/Course";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory/CourseCategory";
import Home from "../../Pages/Home/Home";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course-category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`) 
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }
])