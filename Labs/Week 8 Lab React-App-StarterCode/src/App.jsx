import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Help from "./components/Help";
import Registration from './components/Registration'
import Layout from './components/Layout'


function App() {
  return (
// Replace this direct component rendering with React Router.
   <BrowserRouter>
      <Routes>
    
     <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
 <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="help" element={<Help />} />
 </Route>
  </Routes>
 </BrowserRouter>
  )
}

export default App
