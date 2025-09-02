// import { Button } from './components/ui/button'

import { Route, Routes } from "react-router-dom";
import LadingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
// import PublicDemoPage from "./components/publicdemopage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      {/* <Route path="/public-demo" element={<PublicDemoPage />} /> */}
    </Routes>
  )
}

