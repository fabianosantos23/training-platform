import { Routes, Route } from "react-router-dom";
import { Training } from "./pages/Training";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/training" element={<Training />} />
      <Route path="/training/lesson/:slug" element={<Training />} />
    </Routes>
  )
}