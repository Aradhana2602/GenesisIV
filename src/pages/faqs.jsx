import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Faqs.css"; // Import the separate CSS file

export default function Faqs() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentOpen] = useState(0);

  const optionArr = [
    { title: "Sponsor Us", link: "\\sponsor" },
    { title: "Contact Us", link: "#footer" },
    { title: "Register", link: "https://linktr.ee/GenesisIV?fbclid=PAZXh0bgNhZW0CMTEAAaauRMClslaTr5s7I_WyOI4hWu6VU0bOhuAaopClYc_HrNH4cK-bbsCq4wo_aem_00KVLzYNLPAHL0RzOHxy9Q" },
  ];

  const arr = [
    {
      question: "What is Genesis?",
      answer:
        "Immersive Gaming Fest: A Journey into the World of Virtual Adventures. Genesis, an annual event by AIT's GDXR Club, gathers tech-savvy college students passionate about AR/VR and gaming. Participants compete in two rounds: idea pitching and game development, aiming to create captivating games to engage audiences.",
    },
    {
      question: "What is GDXR?",
      answer:
        "The Game Development and Extended Reality (GDXR) Club at the Army Institute of Technology (AIT) in Pune is a student-run organization dedicated to fostering interest and expertise in game development, virtual reality (VR), and augmented reality (AR). The club provides a platform for students to learn, collaborate, and create innovative projects in these rapidly evolving fields.",
    },
    {
      question: "What is a Game JAM?",
      answer: "Seriously?",
    },
  ];

  return (
    <div id="faqs" className="faqs-container">
      <div className="header-spacing"></div>
      <div className="faqs-title">FAQs</div>
      <div className="header-spacing"></div>
      <div className="faqs-content">
        {arr.map((item, index) => (
          <motion.div className="faq-item" key={index}>
            {item.question}
            <FontAwesomeIcon
              className="faq-icon"
              icon={isOpen && index === currentIndex ? faCircleUp : faCircleDown}
              onClick={() => {
                if (isOpen && index !== currentIndex) {
                  setCurrentOpen(index);
                  return;
                } else {
                  setIsOpen(!isOpen);
                }
                setCurrentOpen(index);
              }}
            />
            {isOpen && index === currentIndex && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="faqs-buttons">
        {optionArr.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ rotate: Math.random() * 3, scale: 1.1 }}
            onClick={() => {
              if (item.title !== "Contact Us") {
                window.open(item.link, "_blank");
              } else {
                window.location.href = "#contactus";
              }
            }}
            className="faqs-button"
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    
    </div>
  );
}
