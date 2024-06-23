import * as React from "react";
import { sidebarIcons, SidebarIcon, IconButton } from "./App";
import PaperInfo from './paperinfo';

export function Summary() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="sidebar-title">A.</h1>
        {sidebarIcons.map((icon, index) => (
          <SidebarIcon key={index} {...icon} />
        ))}
      </aside>
      <main className="main-content">
        <PaperInfo />
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
