import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Login from "./Login"
import Register from "./Register"
import Myprofile from "./Home/Myprofile"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState('')

  useEffect(() => {
    function fetch() {
      axios.get(`${import.meta.env.VITE_URL}/userdata`)
        .then(response => {
          setData(response.data[0])
        })
        .catch(error => {
          console.log(error);
        });
    }

    fetch();

  }, [])

  console.log(data)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Myprofile data={data} />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
