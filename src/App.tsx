import Socials from "./components/Socials";
import FloatingButton from "./components/FloatingButton";
import Header from "./components/Header"
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen font-serif">
        <Header />
        <Presentation />
        <Projects />
        <Socials />
        <ContactForm />
        <FloatingButton />
      </div>
    </>
  );
}

export default App
