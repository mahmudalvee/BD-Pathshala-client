import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./CourseSummaryCard.css";
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';

const CourseSummaryCard = ({ course }) => {
    const {_id, title, img, instructor, category_id, category_name, description, fee, total_enroll} = course
  return (
    <div>
      <Col className="my-3 shadow p-1 rounded">
      <Card style={{ height: "450px" }}>
      <Image
            src={img?img: <p>No data available</p>}
            style={{ height: "225px" }}
          ></Image>
        <Card.Body>
          <Card.Title><h3 className="txt text-decoration-underline fs-2 fw-bold">{title}</h3></Card.Title>
          <Card.Text className="txt fw-semibold">
          {description.length > 100 ? (
            <>
              {description.slice(0, 100) + " ..."}
            </>
          ) : (
            <>{description}</>
          )}
          </Card.Text>
        </Card.Body>
        <Button className="ms-auto mb-1 me-1 my-1 fs-4 shadow rounded btn-width txt" variant="warning">View Details <i className="bi bi-arrow-right-square-fill txt"></i></Button>
      </Card>
      </Col>
    </div>
  );
};

export default CourseSummaryCard;
