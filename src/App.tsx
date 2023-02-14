import React from "react";
import 'react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/Mainlayout/Mainlayout";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import Home from "./page/Home";
import Completed from "./page/Completed";
import Active from "./page/Active";

const App = () => {
  

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/ExtraTodo" element={<Mainlayout/>}>
        <Route path="/ExtraTodo" element={<Home />} />
        <Route path="ExtraTodo/active" element={<Active />} />
        <Route path="ExtraTodo/completed" element={<Completed />} />
      </Route>
      <Route path="*" element={<NotFoundBlock />} />
    </Routes>
  </React.Suspense>
  )
}

export default App