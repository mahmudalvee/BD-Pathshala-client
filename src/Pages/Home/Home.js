import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../Shared/CourseSummaryCard/CourseSummaryCard";

const Home = () => {
  const allcourses = useLoaderData();
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
          {allcourses.map((course) => (
            <CourseSummaryCard
              key={course._id}
              course={course}
            ></CourseSummaryCard>
          ))}
      </Row>
    </div>
  );
};

export default Home;
