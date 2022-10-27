import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const AllCourses = () => {
    const courses = useLoaderData();
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
            {courses.map((course) => (
              <CourseSummaryCard
                key={course._id}
                course={course}
              ></CourseSummaryCard>
            ))}
        </Row>
      </div>
    );
};

export default AllCourses;