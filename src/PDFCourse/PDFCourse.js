import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PDFCourse = () => {
    const course= useLoaderData();
    const {_id, title, img, instructor, category_id, tags, email, category_name, description, fee, total_enroll} = course;
    return (
        <div>
            <h2>This is {title}</h2>
        </div>
    );
};

export default PDFCourse;