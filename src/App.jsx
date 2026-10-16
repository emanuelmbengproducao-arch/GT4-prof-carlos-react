import "./App.css";
import { Header } from "./components/Header";
import Home from "./pages/Home";

const user = window.prompt("Qual o seu nome?") || "Visitante";

function App() {
  return (
    <>
      <Header brand="Geração Tech" description="Sede Bezerra">
        <a href="#equipe"> Equipe </a>
        <a href="#aprendizado"> Aprendizado</a>
      </Header>
      <main className="container"></main>
    </>
  );
}
export default App;
