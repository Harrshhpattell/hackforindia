import "./css/Category.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Category({ setCateName }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cacheBuster = Math.random();

    const apiUrl = `https://abhay-1552.github.io/project_api/category.json?cache=${cacheBuster}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  function handleClick(categoryName) {
    setCateName(categoryName);
  }

  return (
    <div id="category" className="category">
      <h1>Category</h1>
      <div className="card">
        {data.map((data, index) => (
          <div
            onClick={() => handleClick(data.data.name)}
            key={index}
            className="card-details"
          >
            <div className="image">
              <img src={data.data.image} alt="imageee" />
            </div>
            <h2>{data.data.name}</h2>
            <p>
              <TextExpander>{data.data.description}</TextExpander>
            </p>
            <Link to={`/hackforindia/category/${data.data.name}`}>
              <button className="view-more-btn">View</button>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}></div>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 16,

  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div>
      <span>{displayText}</span>
    </div>
  );
}
