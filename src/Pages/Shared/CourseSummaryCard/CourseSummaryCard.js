import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./CourseSummaryCard.css";
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CourseSummaryCard = ({ course }) => {
    const {_id, title, img, instructor, category_id, category_name, description, fee, total_enroll} = course
  return (
    <div className="cards">
      <Col className="my-3 mx-3">
      <Card style={{ height: "450px" }}>
        <Image
            src={img?img: <p>No data available</p>}
            style={{ height: "225px" }}
          ></Image>
        <Card.Body>
          <Card.Title><h3 className="txt text-decoration-underline fs-2 fw-bold">{title}</h3></Card.Title>
          <Card.Text className="txt fw-semibold">
          {description.length > 85 ? (
            <>
              {description.slice(0, 85) + " ..."}
            </>
          ) : (
            <>{description}</>
          )}
          </Card.Text>
        </Card.Body>
        <Link className="ms-auto mb-1 me-1 my-1" to={`/course/${_id}`}><Button className=" fs-4 shadow rounded btn-width txt" variant="warning">View Details <i className="bi bi-arrow-right-square-fill txt"></i></Button></Link>
      </Card>
      </Col>
    </div>
  );
};

export default CourseSummaryCard;
