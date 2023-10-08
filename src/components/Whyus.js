import React from "react";
import "./css/Whyus.css";

const whyUs = [
  {
    head: "✅ Experience",
    desc: "With years of industry expertise, we bring a wealth of knowledge to the table. From corporate gatherings to weddings, we've done it all.",
  },
  {
    head: "✅ Tailored Solutions",
    desc: "Your event is unique, and so are our solutions. We customize every detail to fit your specific needs and preferences.",
  },
  {
    head: "✅ Attention to Detail",
    desc: "We sweat the small stuff, so you don't have to. From venue selection to catering, we ensure every element is perfect.",
  },
  {
    head: "✅ Flawless Execution",
    desc: "Our team works tirelessly behind the scenes to ensure your event runs smoothly, leaving you free to enjoy the moment.",
  },
  {
    head: "✅ Creativity Unleashed",
    desc: "Expect innovative ideas that will make your event stand out from the rest. We love bringing fresh concepts to life.",
  },
];

export default function Whyus() {
  return (
    <div className="whyus">
      <h1>Why Choose Nexus?</h1>

      <div className="whyus-box">
        {whyUs.map((text, index) => (
          <MessageBox key={index} head={text.head} desc={text.desc} />
        ))}
      </div>
    </div>
  );
}

function MessageBox({ head, desc }) {
  return (
    <div className="message-box">
      <h3>{head}</h3>
      <p>{desc}</p>
    </div>
  );
}
