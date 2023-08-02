import "./App.css";
import Welcome from "./Welcome.jsx";
import Gallery from "./Gallery.jsx";
import Intro from "./Intro.jsx";
import Idk from "./Idkwhattonamethis.jsx";
import Socials from "./Socials.jsx";

function App() {
  return (
    <div className="pages">
      <div id="top"></div>
      <section className="page-section">
        <Welcome />
      </section>

      <section className="page-section">
        <Gallery />
      </section>

      <section className="page-section">
        <Intro />
      </section>

      <section className="page-section">
        <Idk />
      </section>

      <section className="page-section" id="contact-section">
        <Socials />
      </section>
    </div>
  );
}

export default App;
