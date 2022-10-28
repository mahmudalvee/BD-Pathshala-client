import React from 'react';
import Header from '../Shared/Header/Header';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container";
import Footer from '../Shared/Footer/Footer';

const FAQ = () => {
    return (
        <div>
            <Header></Header>
            <div className="App">
                <h3 className="badge fs-2 text-bg-warning text-decoration-underline">
                FAQ
                </h3>
            </div>
                <Container>
                <Accordion className='w-75 mx-auto'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Your office location? Where to come to the course?</Accordion.Header>
        <Accordion.Body>No need to come anywhere. This is a fully online course, you can do the course from your home account. Only if you have an internet connection to play the video!</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How long is the duration of the course?</Accordion.Header>
        <Accordion.Body>Varies by course. Details are given on the course page. Lifetime access to most courses. You can access the course from the Dashboard by logging in at any time during the access period.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What to do if you do not understand a topic?</Accordion.Header>
        <Accordion.Body>There is email account of the instructor in every course, if you write your question there, our instructors can answer. Also we have helpline.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Payment system?</Accordion.Header>
        <Accordion.Body>Almost all mobile/internet banking in Bangladesh including Bikash, Rocket, Debit/Credit Cards.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Container>
            

            <Footer></Footer>
        </div>
    );
};

export default FAQ;