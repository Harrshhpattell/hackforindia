import "./css/Category.css";
import { useState } from "react";

const data = [
  {
    header: "Birthday Event",
    description:
      "Our experienced team can help you plan and execute events of all sizes and types, from corporate conferences to intimate weddings.",
    imageLink:
      "https://images.pexels.com/photos/18608193/pexels-photo-18608193/free-photo-of-teide-nationalpark-teneriffa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header: "Co-operate Events",
    description:
      "Enjoy delicious catering options tailored to your event's theme and dietary preferences. Your guests will be delighted.",
    imageLink:
      "https://images.pexels.com/photos/18608193/pexels-photo-18608193/free-photo-of-teide-nationalpark-teneriffa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header: "Wedding Event",
    description:
      "We'll assist you in finding the perfect venue for your event, whether it's a grand ballroom or a picturesque outdoor setting.",
    imageLink:
      "https://images.pexels.com/photos/18608193/pexels-photo-18608193/free-photo-of-teide-nationalpark-teneriffa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Category() {
  return (
    <div id="category" className="category">
      <h1>Category</h1>
      <div className="card">
        {data.map((data, index) => (
          <Card
            key={index}
            image={data.imageLink}
            header={data.header}
            description={data.description}
          />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn-start">View All</button>
      </div>
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
