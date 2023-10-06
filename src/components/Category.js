import "./css/Category.css";
import React, { useState, useEffect } from "react";

export default function Category() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("https://abhay-1552.github.io/project_api/category.json")
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
  return (
    <div id="category" className="category">
      <h1>Category</h1>
      <div className="card">
        {data.map((data, index) => (
          <Card
            key={index}
            image={data.data.image}
            header={data.data.name}
            description={data.data.description}
          />
        ))}
      </div>
      <div style={{ textAlign: "center" }}></div>
    </div>
  );
}

function Card({ image, header, description }) {
  return (
    <div className="card-details">
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <h2>{header}</h2>
      <p>
        <TextExpander>{description}</TextExpander>
      </p>
      <button className="view-more-btn">View</button>
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
