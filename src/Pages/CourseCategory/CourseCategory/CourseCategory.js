import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategory = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h2>This Category has : {courses.length}</h2>
        </div>
    );
};

export default CourseCategory;