import Header from "./components/header/Header";
import "./base.css"
import "./adaptive.css"
import HeaderInfo from "./components/headerInfo/HeaderInfo";
import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import About from "./pages/about/About";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<HeaderInfo/>}/>
        <Route path="/catalog" element = {<Catalog/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
