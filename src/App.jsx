import "./App.css";
import "./components/header/Header";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
