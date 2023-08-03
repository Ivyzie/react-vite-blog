import "./App.css";
import Welcome from "./Welcome.jsx";
import Gallery from "./Gallery.jsx";
import Intro from "./Intro.jsx";
import Idk from "./Idkwhattonamethis.jsx";
import Socials from "./Socials.jsx";
import Index from "./Index.jsx";

function App() {
  return (
    <>
      <Index />
      <div className="pages">
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
    </>
  );
}

export default App;
