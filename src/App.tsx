import "./App.css";
import { Careers } from "./layout/careers/Careers";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Planning } from "./layout/planning/Planning";
import { Projects } from "./layout/projects/Projects";
import { Skills } from "./layout/skills/Skills";
import { Trusted } from "./layout/trusted/Trusted";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Trusted />
      <Projects />
      <Planning />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
