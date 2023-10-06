import { useState } from "react";

const faqs = [
  {
    question: "What types of events does Nexus Hosts specialize in?",
    answer:
      "Nexus Hosts specializes in a wide range of events, including corporate gatherings, weddings, and social events.",
  },
  {
    question: "How do I get in touch with Nexus Hosts to discuss my event?",
    answer:
      "You can contact us through our website's contact form, or reach out via email or phone. Visit our 'Contact Us' page for details.",
  },
  {
    question:
      "What makes Nexus Hosts stand out from other event management companies?",
    answer:
      "What sets us apart is our commitment to delivering exceptional events, personalized service, meticulous attention to detail, and a creative approach to event planning.",
  },
  {
    question: "Can Nexus Hosts handle both small and large-scale events?",
    answer:
      "Absolutely! We have experience in managing events of all sizes, from intimate gatherings to large-scale corporate functions.",
  },
  {
    question:
      "What is the typical timeline for planning an event with Nexus Hosts?",
    answer:
      "The timeline varies depending on the event's complexity and size. We work with you to create a customized timeline that suits your needs.",
  },
];

export default function Faqs() {
  return (
    <div className="accordion">
      {faqs.map((list, index) => (
        <AccordionItems
          key={index}
          question={list.question}
          answer={list.answer}
        />
      ))}
    </div>
  );
}
function AccordionItems({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={isOpen ? "active" : "item"} onClick={handleToggle}>
      <div className="head">
        <p className="title">{question}</p>
        <p className={isOpen ? "open" : "close"}>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <p className="text">{answer}</p>}
    </div>
  );
}
