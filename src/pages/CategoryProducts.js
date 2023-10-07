// import "./CategoryProducts.css";

// export default function CategoryProducts({ cateName }) {
//   return (
//     <div className="cate-page">
//       <h1>{cateName}</h1>
//       <div className="cards">
//         <div className="card">
//           <div className="image"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./CategoryProducts.css";

import { useState } from "react";

const data = [
  {
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.weddingsutra.com%2Fimages%2FVendor_Images%2FCatering%2Fgyanjee-caterers%2Fgyanjee-caterers-10.jpg&tbnid=VN-m3E2QMdWPRM&vet=12ahUKEwiyq5CajuOBAxX9bmwGHcSFChMQMygJegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fwww.weddingsutra.com%2Fvendor%2Fgyanjee-caterers%2F&docid=N2c9T28bhMPg8M&w=1000&h=667&q=caterers&ved=2ahUKEwiyq5CajuOBAxX9bmwGHcSFChMQMygJegUIARCAAQ",
    name: "Caterers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem fugiat beatae eligendi omnis magni laborum atque sunt repellat eius.",
  },
  {
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.jdmagicbox.com%2Fcomp%2Fahmedabad%2Fs5%2F079pxx79.xx79.180327103759.m7s5%2Fcatalogue%2Fsajja-gift-and-cards-swastik-ahmedabad-greeting-card-dealers-1op2ohx7l4.jpg%3Fclr%3D&tbnid=IibJZeG7AfQKDM&vet=12ahUKEwiPhturjuOBAxXwbGwGHVuUA3EQMygFegQIARB4..i&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FAhmedabad%2FGift-Shops%2Fnct-10231352&docid=MN3IjxQH8vcfoM&w=1920&h=1440&itg=1&q=Gift%20Shop&ved=2ahUKEwiPhturjuOBAxXwbGwGHVuUA3EQMygFegQIARB4",
    name: "Gift Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem fugiat beatae eligendi omnis magni laborum atque sunt repellat eius.",
  },
  {
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.trustedreviews.com%2Fwp-content%2Fuploads%2Fsites%2F54%2F2019%2F03%2FTefal-Cake-Factory.jpg&tbnid=wPQ6P-_6AwUXNM&vet=12ahUKEwix6-3BjuOBAxWcZmwGHaz3CZQQMygCegQIARBy..i&imgrefurl=https%3A%2F%2Fwww.trustedreviews.com%2Freviews%2Ftefal-cake-factory-cake-maker&docid=a7mEnLc-ceQo_M&w=3861&h=2574&q=Cake%20Maker&ved=2ahUKEwix6-3BjuOBAxWcZmwGHaz3CZQQMygCegQIARBy",
    name: "Cake Maker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem fugiat beatae eligendi omnis magni laborum atque sunt repellat eius.",
  },
  {
    image:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwibrOfXjuOBAxX8L4MDHQXSAwoYABAHGgJzZg&ase=2&gclid=CjwKCAjw4P6oBhBsEiwAKYVkq9TnoORtiRvBuwKz_MCBIYgY9xZZ8w6paHIguatiELJ2Jm_QoPsCVRoCBBgQAvD_BwE&sig=AOD64_2fJA7GJCHLAMfdqxNMLm9-bYtvVA&ctype=5&nis=6&adurl&ved=2ahUKEwi4w9fXjuOBAxUZa2wGHabSCV4Qvhd6BQgBEIsB",
    name: "Decorator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem fugiat beatae eligendi omnis magni laborum atque sunt repellat eius.",
  },
];

export default function CategoryProducts({ cateName }) {
  return (
    <div className="cate-name">
      <h1>{cateName}</h1>

      <div className="card1">
        {data.map((data, index) => (
          <div key={index} className="card-details1">
            <h2>{data.name}</h2>
            <p>
              <TextExpander>{data.description}</TextExpander>
            </p>

            <button className="view-more-btn">View</button>
          </div>
        ))}
      </div>
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
