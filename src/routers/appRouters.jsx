import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
const AppRouters = () => {

  return (
    <Router>
      <Routes>

        <Route index element={<Home />} />



        {/* Not Found */}
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>


    </Router>
  )
}

export default AppRouters