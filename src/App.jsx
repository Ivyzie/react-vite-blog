import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Welcome from "./Welcome.jsx";
import Gallery from "./Gallery.jsx";
import Idk from "./Idkwhattonamethis.jsx";
import Projects from "./Projects.jsx";
import Socials from "./Socials.jsx";

function App() {
  return (
    <NextUIProvider>
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

        <section className="page-section" id="contact-section">
          <Socials />
        </section>
      </div>
    </NextUIProvider>
  );
}

export default App;
