import "./App.css";
import Welcome from "./Welcome.jsx";
import Gallery from "./Gallery.jsx";
import Idk from "./Idkwhattonamethis.jsx";
import Socials from "./Socials.jsx";
import Page2 from "./Page2.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <>
      <div className="pages">
        <section className="page-section">
          <Welcome />
        </section>

        <section className="page-section">
          <Gallery />
        </section>

        <section className="page-section">
          <Idk />
        </section>

        <section className="page-section">
          <Projects />
        </section>

        <section className="page-section">
          <Page2 />
        </section>

        <section className="page-section" id="contact-section">
          <Socials />
        </section>
      </div>
    </>
  );
}

export default App;
