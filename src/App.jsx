import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/TopBar/TopNavBar";
import PainelLeft from "./components/Painelleft/PainelLeft";
import BoasVindas from "./components/BoasVindas/BoasVindas";
import ChatWindowContainer from "./components/ChatWindow/ChatWindowContainer/ChatWindowContainer";

import "./App.scss";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

import { RouteRender } from "./components/routes/route";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "dark"
            ? "Container__App darkMode__Background"
            : "Container__App ligthMode__Background"
        }
      >
        <BrowserRouter>
          <TopNavBar />
          <LeftNavBar />
          <Routes>
            <Route path='/' element={<BoasVindas />} />
            <Route path='/chat' element={<PainelLeft />} />
            <Route
              path='chat/:pessoa'
              element={
                <>
                  <RouteRender />
                  <ChatWindowContainer />
                </>
              }
            />
            ;
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
