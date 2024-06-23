// PaperInfo.js
import React from 'react';
import { IconButton } from './App'; // Adjust the import path if needed

const PaperInfo = () => {
  return (
    <section className="paper-info">
      <div className="paper-details">
        <h2 className="paper-title">Attention Is All You Need</h2>
        <p className="paper-authors">
          Authors: A Vaswani, N Shazeer, N Parmar, J Uszkoreit, L Jones, A Gomez, L Kaiser, I Polosukhin
        </p>
        <div className="paper-meta">
          <div className="submission-info">
            <p className="submission-date">
              Submitted on Jun 12, 2017, last revised Aug 2, 2023
            </p>
          </div>
          <button className="cite-button">
            Cite
            <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/4438df58bddebb3e4f9b22724536e311eae0dfe05cb33d2bb717ce08fcf0cf28?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Cite icon" className="cite-icon" />
          </button>
        </div>
      </div>
      <div className="paper-actions">
        <div className="action-buttons">
          <button className="action-button">
            <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/b14b80b9b20a59701fade3483f34f9ab76fa9e527ef5d0b8330bd3f54b22f328?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Action icon" className="action-icon" />
          </button>
          <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/154415415b30c0f56c155c3e044e180d7fb2beec26680d81c6617db5ead09552?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Additional action" className="additional-action" />
        </div>
        <div className="key-topics">
          <h3 className="topics-title">Key Topics</h3>
          <ul className="topics-list">
            <li>- Computation and Language</li>
            <li>- Machine Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaperInfo;
