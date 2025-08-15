import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainLayout from './layout/MainLayout.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home.jsx'
import ServicesPage from './pages/Services.jsx'
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'
import BlogPage from './pages/Blog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App

