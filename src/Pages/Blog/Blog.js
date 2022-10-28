import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className="App">
        <h3 className="badge fs-2 text-bg-warning text-decoration-underline">
          Latests Blogs
        </h3>
    </div>
        <div className="">
          <Card className="w-75 mx-auto mt-5 bg-warning text-dark">
            <Card.Header className="fst-italic text-center fs-5">What is Cors?</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4 className="fs-4">
                Cross-Origin Resource Sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                <p>As a reference, if the frontend and backend are at two different domains, we need CORS.</p>
                </h4>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3 bg-warning text-dark">
            <Card.Header className="fst-italic text-center fs-5">Why firebase? What other options to implement authentication?</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4 className="fs-4">
                Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. Firebase is simple, lightweight, friendly, and industrially recognized. Alternatives of Firebase:
                <ul>
                    <li>Back4App</li>
                    <li>Parse</li>
                    <li>Nhost</li>
                    <li>Backendless</li>
                </ul>
                </h4>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3 bg-warning text-dark">
            <Card.Header className="fst-italic text-center fs-5">Private route & How does it work?</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4 className="fs-4">
                PrivateRoute component is the blueprint for all private routes in the application. 
                <p>private route component renders child components If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. </p>
                </h4>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3 bg-warning text-dark">
            <Card.Header className="fst-italic text-center fs-5">Node & How does it work?</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4 className="fs-4">
                Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
                <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.</p>
                </h4>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Blog;
