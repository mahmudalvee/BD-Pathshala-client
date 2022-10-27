import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = () => {
    const course= useLoaderData();
    const {_id, title, img, instructor, category_id, category_name, description, fee, total_enroll} = course
    return (
        <div>
            <h2>{course.title}</h2>
            <Link className="ms-auto mb-1 me-1 my-1" to={`/enroll-course/${_id}`}><Button className=" fs-4 shadow rounded btn-width txt" variant="warning"><i className="bi bi-gift-fill txt"></i> Get Premium Access</Button></Link>
        </div>
    );
};

export default Course;