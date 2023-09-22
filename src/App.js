import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MiddleCon from "./Components/MiddleCon";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <MiddleCon />
      <Footer />
    </div>
  );
}

export default App;
