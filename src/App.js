import "./App.css";
import Links from "./components/Links";
import Main from "./components/Main";
import Footer from "./components/Footer";
import img from "./assets/images/1627227732848.jpeg"
function App() {
  return (
    <main className="app">
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <Links />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
