import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const CourseCategory = () => {
    const categoryCourses = useLoaderData();
    const catName= categoryCourses[0]?.category_name;
    return (
        <div>
            <div className='App mb-4'>
                {categoryCourses.length < 10 ? (
                    
                    <><h1>{catName}</h1></>
                 )
                : 
                (
                    <><h1>All Courses</h1></>
                )}
                <h4>Available Courses: {categoryCourses.length}</h4>
            </div>
        
            <Row xs={1} md={2} className="g-4">
            {
                categoryCourses.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
            </Row>
        </div>
    );
};

export default CourseCategory;