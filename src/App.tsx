import { FC } from "react";
import { Route, Router, Routes } from "react-router-dom";

// components
import Navbar from "./components/module/Navbar";
import Saidbar from "./components/module/Saidbar";
import Main from "./components/module/Main";

const App: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Saidbar />
        <div className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
