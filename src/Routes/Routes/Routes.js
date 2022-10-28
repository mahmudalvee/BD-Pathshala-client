import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "../../ErrorRoute/ErrorRoute";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course/Course";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory/CourseCategory";
import EnrollCourse from "../../Pages/EnrollCourse/EnrollCourse/EnrollCourse";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PDFCourse from "../../PDFCourse/PDFCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/allcourses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
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
            },
            {
                path: '/get-details-course/:id',
                element: <PDFCourse></PDFCourse>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/enroll-course/:id',
                element: <PrivateRoute><EnrollCourse></EnrollCourse></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
        ]
    },
    {
        path: '/faq',
        errorElement: <ErrorRoute></ErrorRoute>,
        element: <FAQ></FAQ>
    },
    {
        path: '/blog',
        errorElement: <ErrorRoute></ErrorRoute>,
        element: <Blog></Blog>
    }
])