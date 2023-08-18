import "./gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery-div">
        <div className="frog-div">
          <img src="frog1.png" id="penguin" />
        </div>

        <div className="intro-div">
          <h3>WebDev Knowledge</h3>
          <h4>- HTML</h4>
          <h4>- CSS</h4>
          <h4>- PHP</h4>
          <h4>- JavaScript</h4>
          <h4>- React</h4>
          <h4>- ViteJS</h4>
          <h4>- SQL</h4>
        </div>

        <div className="intro-div2">
          <h3>Other Skills</h3>
          <h4>- C</h4>
          <h4>- Python</h4>
          <h4>- Java</h4>
          <h4>- Linux</h4>
        </div>
      </div>
      <div id="pros-div"></div>
    </>
  );
}

export default Gallery;
