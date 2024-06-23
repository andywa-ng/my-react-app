import * as React from "react";
import "./App.css"
import { Summary } from "./Summary";

export const IconButton = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export const SidebarIcon = ({ src, alt, className }) => (
  <IconButton src={src} alt={alt} className={`sidebar-icon ${className}`} />
);

export const sidebarIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5cee3e86f27ad0aab948667892ddb4e617b34789b93c5ed28248c3808107909?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f6237d2eef05c6760e9e3a6d6c7b3b1b5d063365254c5da19d0c0ff3bf72609?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d900109aa870b98371309b6d4f9a3c2a543c7c974e3a375d75e2194966767c99?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ab221be42c930fb36b0ad2803acde8368e1e54037ff94b72fa970ac6ac2a050?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/705967dc31bf2dbeaa50f6bf3b155d0bf03185a2428fd13564dbac55f0723728?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29bb573659b1667c5405f6d360495b96fc8d72a7e7abf33d65fe7c4e8f72f478?apiKey=34b3c4e0c2a144fb94e581b1c79db627&", alt: "Sidebar icon 6" },
];

export default Summary;