import { useState } from "react";
import "./Projects.scss";

function Projects() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="projects-div">
      <div id="randomdiv"></div>
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="gallery-wrap">
          <a
            href="https://github.com/Ivyzie/russian-roulette-bot"
            className="item item-1"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem("Quote Bot")}
            onMouseLeave={() => setHoveredItem(null)}
          ></a>

          <a
            href="https://github.com/Ivyzie/react-vite-blog"
            className="item item-2"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem("Personal Blog")}
            onMouseLeave={() => setHoveredItem(null)}
          ></a>

          <a
            href=""
            className="item item-3"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem("Admin Dashboard")}
            onMouseLeave={() => setHoveredItem(null)}
          ></a>

          <a
            href=""
            className="item item-4"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem("Response Bot")}
            onMouseLeave={() => setHoveredItem(null)}
          ></a>

          <a
            href=""
            className="item item-5"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem("Java")}
            onMouseLeave={() => setHoveredItem(null)}
          ></a>
        </div>

        {hoveredItem === "Quote Bot" && (
          <div className="item-title">
            <h1>Quote Bot (Python)</h1>
          </div>
        )}

        {hoveredItem === "Personal Blog" && (
          <div className="item-title">
            <h1>Personal Blog</h1>
          </div>
        )}

        {hoveredItem === "Admin Dashboard" && (
          <div className="item-title">
            <h1>Admin Dashboard</h1>
          </div>
        )}

        {hoveredItem === "Response Bot" && (
          <div className="item-title">
            <h1>Response Bot (Python)</h1>
          </div>
        )}
        {hoveredItem === "Java" && (
          <div className="item-title">
            <h1>Crowd Control System (Java)</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
