import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TechAndProjects from "./components/TechAndProjects/TechAndProjects";
import Contact from "./components/Contact";

function App() {

  return (
      <>
      <div className="absolute min-h-screen -z-10 w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
              <NavBar/>
              <Hero />
              <TechAndProjects />
              <Contact/>
          </main>
      </div>
</>
)
}

export default App;
