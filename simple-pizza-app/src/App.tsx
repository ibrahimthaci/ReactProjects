import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Pizza } from "./Pizza's/Pizza";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">Pizza App</header>
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
