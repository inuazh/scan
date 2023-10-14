import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {routesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
