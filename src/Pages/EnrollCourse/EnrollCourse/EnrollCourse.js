import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

import './EnrollCourse.css';

const EnrollCourse = () => {
    const course= useLoaderData();
    const {_id, title, img, instructor, category_id, category_name, description, fee, total_enroll} = course;
    const handleSubmit= () =>{
        toast.success('Thank you for Purchasing the Course. We will contact you ASAP! 😃');
    }
    return (
        <div className='txt mt-3 bg-light rounded p-5'>   
            <h1 className='text-center'><span className="badge rounded-pill text-bg-warning px-5 mb-3">Get Premium Access 
            <p>of</p>
            <p>'{title}'</p></span></h1>
             <Form className='mt-2 w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control readOnly defaultValue={title} type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Category</Form.Label>
                    <Form.Control readOnly defaultValue={category_name} type="text"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mobile number</Form.Label>
                    <Form.Control type="text" placeholder="number" />
                </Form.Group>

                <div className='text-center text-dark'>
                    <h2>Total fee: {fee}</h2>
                    <h4>Payment number: 01XXXXXXXXX</h4>
                    <h4>Payment acceptable: Bkash/ Nogod/ Rocket.</h4>
                </div>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Bkash" />
                    <Form.Check type="checkbox" label="Nogod" />
                    <Form.Check type="checkbox" label="Rocket" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Transaction ID</Form.Label>
                    <Form.Control type="text" placeholder="Transaction ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I have provided all information correctly & completed my payment" />
                </Form.Group>

                <div className='text-center'>
                    <Button onClick={handleSubmit} className="fs-4 shadow rounded btn-width txt trans" variant="warning"><i className="bi bi-bag-check-fill txt"></i> Payment Completed</Button>
                </div>
            </Form>   
        </div>
    );
};

export default EnrollCourse;