import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Faqs.css';

const Faqs = () => {
  const [answersVisible, setAnswersVisible] = useState(false);

  const toggleAnswers = () => {
    setAnswersVisible(!answersVisible);
  };
  return (
    <div className="faqs_header">
    <Header title="FAQs" />
      <div className="faq-section section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item" onClick={toggleAnswers}>
            <h3>Question 1</h3>
            <div
              className={`faq-answer ${answersVisible ? "visible" : "hidden"}`}
            >
              <p>Answer 1</p>
            </div>
          </div>
          <div className="faq-item" onClick={toggleAnswers}>
            <h3>Question 2</h3>
            <div
              className={`faq-answer ${answersVisible ? "visible" : "hidden"}`}
            >
              <p>Answer 2</p>
            </div>
          </div>
          <div className="faq-item" onClick={toggleAnswers}>
            <h3>Question 3</h3>
            <div
              className={`faq-answer ${answersVisible ? "visible" : "hidden"}`}
            >
              <p>Answer 3</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
