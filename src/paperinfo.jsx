// PaperInfo.js
import React from 'react';
import { IconButton } from './App'; // Adjust the import path if needed

const PaperInfo = () => {
  return (
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
  );
};

export default PaperInfo;
