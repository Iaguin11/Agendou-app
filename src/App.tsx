// import { Button } from './components/ui/button'

import { Route, Routes } from "react-router-dom";
import LadingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  )
}

