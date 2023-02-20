import logo from "./logo.svg";
import "./App.css";
import { LoginPage } from "./components/LoginPage";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EmailContext } from "./components/Context";
import { useContext, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={[email, setEmail]}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<div> </div>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </EmailContext.Provider>
  );
}

export default App;
