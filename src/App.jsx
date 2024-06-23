import * as React from "react";
import "./App.css"

const IconButton = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const SidebarIcon = ({ src, alt, className }) => (
  <IconButton src={src} alt={alt} className={`sidebar-icon ${className}`} />
);

const sidebarIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5cee3e86f27ad0aab948667892ddb4e617b34789b93c5ed28248c3808107909?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f6237d2eef05c6760e9e3a6d6c7b3b1b5d063365254c5da19d0c0ff3bf72609?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d900109aa870b98371309b6d4f9a3c2a543c7c974e3a375d75e2194966767c99?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ab221be42c930fb36b0ad2803acde8368e1e54037ff94b72fa970ac6ac2a050?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/705967dc31bf2dbeaa50f6bf3b155d0bf03185a2428fd13564dbac55f0723728?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29bb573659b1667c5405f6d360495b96fc8d72a7e7abf33d65fe7c4e8f72f478?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 6" },
];

function MyComponent() {
  return (
      <div className="container">
        <aside className="sidebar">
          <h1 className="sidebar-title">A.</h1>
          {sidebarIcons.map((icon, index) => (
            <SidebarIcon key={index} {...icon} />
          ))}
        </aside>
        <main className="main-content">
          <section className="paper-info">
            <div className="paper-details">
              <h2 className="paper-title">Attention Is All You Need</h2>
              <p className="paper-authors">
                Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin
              </p>
              <div className="paper-meta">
                <div className="submission-info">
                  <p className="submission-date">
                    Submitted on 12 Jun 2017 (v1), last revised 2 Aug 2023 (this version, v7)
                  </p>
                  <p className="paper-link">Paper</p>
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
                  <li>Computation and Language</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
            </div>
          </section>
          <nav className="navigation">
            <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e97d9adf1b88d7089e73d5f9174be03ab45c80a7ac4e0b7ee4d65ed7b91b8e?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Navigation icon" className="nav-icon" />
            <div className="nav-controls">
              <div className="nav-buttons">
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/cca89ef633a00737f5b5a41aec81abc0aa6f8974c69347169cb464af5e10019b?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Previous" className="nav-button" />
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b63e64707a95c0b61f4fe422f5ecf02489e0ad398b8a6c68654e9c4ffcf0c67?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Next" className="nav-button" />
              </div>
              <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ee1c4e012614903a9af30c9a44299a0118aef166d56c537562561cf93c0c35?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="More options" className="more-options" />
            </div>
          </nav>
          <footer className="content-footer">
            <div className="page-controls">
              <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f759b4b0b359e9b839c79777ac2cfac3cc70fb9e24481fde8d27dbcd4fdb818?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Zoom out" className="zoom-control" />
              <div className="page-indicator">
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb6d513a196054ce04519bfbbc4dc1264d581bcc9e5ffd20a008b39a6fe76cb5?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Current page" className="page-icon" />
                <span className="page-number">1/15</span>
              </div>
            </div>
            <div className="additional-controls">
              <div className="control-group">
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/9051efda22c5897adae7b7f08bb0bb1fbae28ab64e05b4fd523df763024b858b?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Control 1" className="control-icon" />
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/631254d7bac230a97859e9e90d94f8e45ed0d92574679066bc755248176cf936?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="Control 2" className="control-icon" />
              </div>
              <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/12de0946711920305bf7423cd1583bd97f39d87f4f1129a3e7dfefa676af7da0?apiKey=34b3c4e0c2a144fb94e581b1c79db627&" alt="More options" className="more-options" />
            </div>
          </footer>
        </main>
      </div>
  );
}

export default MyComponent;