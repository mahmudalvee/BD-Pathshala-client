import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './EnrollCourse.css';

const EnrollCourse = () => {
    const course= useLoaderData();
    const {_id, title, img, instructor, category_id, category_name, description, fee, total_enroll} = course;
    return (
        <div>
            <h2>Premium Acces of: {title}</h2>
            <h4>instructor: {instructor}</h4>
        </div>
    );
};

export default EnrollCourse;