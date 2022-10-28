import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Course.css';

const Course = () => {
    const course= useLoaderData();
    const {_id, title, img, instructor, category_id, tags, email, category_name, description, fee, total_enroll} = course
    return (
        <div>
            <div className="card-header text-end">
            <Link to={`/get-details-course/${_id}`}><Button className=" fs-4 shadow rounded btn-width txt trans" variant="warning"><i className="bi bi-file-earmark-arrow-down-fill txt"></i> Get Details</Button></Link>
            </div>
            <Card>
            <Card.Img variant="top" className='img-fluid rounded mx-auto d-block' src={img} />
            <Card.Body>
                <h2 className='txt text-center fw-bold'>{title}</h2>
                <Card.Text className='text-dark'>
                    {description}
                </Card.Text>
                <div className='txt'>
                    <ul>
                        {
                            tags.map( tag => 
                                <li
                                key={tag}
                                >{tag}</li>
                            )
                        }
                    </ul>
                </div>
                <h3 className='txt'>Instructor: {instructor}</h3>
                <h5 className='text-dark'><i className="bi bi-envelope-check"></i>: {email}</h5>
                <h4 className='txt'><i className="bi bi-people-fill"></i> : {total_enroll} students</h4>
                <Card.Footer className="d-lg-flex d-sm-grid App justify-content-between mt-3">
                    <div className='my-auto'>
                        <h3><span className="badge rounded-pill text-bg-primary">Course fee: {fee}</span></h3>
                    </div>
                    <div>
                    <Link to={`/enroll-course/${_id}`}><Button className=" fs-4 shadow-lg rounded btn-width txt trans" variant="warning"><i className="bi bi-gift-fill txt"></i> Get Premium Access</Button></Link>
                    </div>
                </Card.Footer>
                <div className='text-center mt-2'>
                <Link to={`/course-category/${category_id}`}>
                    <button type="button" className="btn btn-outline-dark  shadow-sm rounded fs-5">Similar Courses</button>
                </Link>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Course;