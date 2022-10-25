import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './LeftSideNav.css';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3>Left Side: {categories.length}</h3>
      <div className="App">
        <ListGroup>
            {
                categories.map(category => <Link className="link" to={`/course-category/${category.id}`}
                    key={category.id}>
                        <ListGroup.Item className="txt-link" variant="info">{category.name}</ListGroup.Item>
                    </Link> )
            }
        </ListGroup>
      </div>
    </div>
  );
};

export default LeftSideNav;