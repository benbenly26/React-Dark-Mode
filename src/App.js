import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainLayout from "./pages/MainLayout";
import Settings from "./pages/components/Settings";
import Theme from "./pages/components/Theme";
import LocalStorage from "./pages/components/LocalStorage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Theme />} />
          <Route path="/local-storage" element={<LocalStorage />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
