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
          <div
            className="item item-1"
            onMouseEnter={() => setHoveredItem("Quote Bot")}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>

          <div
            className="item item-2"
            onMouseEnter={() => setHoveredItem("Personal Blog")}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>

          <div
            className="item item-3"
            onMouseEnter={() => setHoveredItem("Admin Dashboard")}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>

          <div
            className="item item-4"
            onMouseEnter={() => setHoveredItem("Response Bot")}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>

          <div
            className="item item-5"
            onMouseEnter={() => setHoveredItem("Project")}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>
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
        {hoveredItem === "Project" && (
          <div className="item-title">
            <h1>Crowd Control System (Java)</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
