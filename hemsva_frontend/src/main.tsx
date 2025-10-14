import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Stats from "./pages/Stats.tsx";
import Home from "./pages/Home.tsx";
import Flights from "./pages/Flights.tsx";

const Placeholder = ({ name }: { name: string }) => <div className="flex items-center justify-center h-screen text-2xl font-semibold">{name}</div>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* PROFILE */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/flights" element={<Flights />} />

        {/* FLIGHT */}
        <Route path="/repositioning" element={<Placeholder name="Repositioning" />} />

        {/* OPS */}
        <Route path="/documents" element={<Placeholder name="Documents" />} />
        <Route path="/announcements" element={<Placeholder name="Announcements" />} />
        <Route path="/new-dispatch" element={<Placeholder name="New Dispatch" />} />

        {/* ADMIN */}
        <Route path="/manage-aircraft" element={<Placeholder name="Manage Aircraft" />} />
        <Route path="/manage-missions" element={<Placeholder name="Manage Missions" />} />
        <Route path="/manage-repositioning" element={<Placeholder name="Manage Repositioning" />} />
        <Route path="/manage-bases" element={<Placeholder name="Manage Bases" />} />
        <Route path="/manage-users" element={<Placeholder name="Manage Users" />} />
        <Route path="/manage-pireps" element={<Placeholder name="Manage PIREPs" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
