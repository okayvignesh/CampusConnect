import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Login from "./Login"
import Register from "./Register"
import { useState } from "react"

function App() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onUsernameChange={handleUsernameChange} />} />
          <Route path="/" element={<Home username={username} />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
