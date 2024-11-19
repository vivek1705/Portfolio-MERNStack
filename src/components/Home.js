import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import data from "../data";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typeSpeed] = useState(100);

  useEffect(() => {
    const handleTypewriter = () => {
      const fullText = data.roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % data.roles.length); // Move to the next role
        }
      }
    };

    const typingTimer = setTimeout(handleTypewriter, typeSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, roleIndex, typeSpeed]);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={data.profileImage} alt="Profile" className="profile-image" />
        <div className="text-content">
          <h1>{data.name}</h1>
          <h2 className="role">{currentText}<span className="cursor">|</span></h2>
          <p>{data.shortbio}</p>
          <div className="button-group">
            <button
              className="btn"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </button>
            <a href={data.resumeLink} className="btn" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
