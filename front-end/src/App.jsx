<<<<<<< HEAD
import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import ArticleList from './pages/ArticleList'
import Article from './pages/Article'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  //imported footer
import NotFound from './pages/NotFound'
import ProfilePage from  './pages/ProfilePage'
=======
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
>>>>>>> main

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <Router>
<<<<<<< HEAD
      <div>
    <Navbar/>
=======
      <Navbar theme={theme} toggleTheme={toggleTheme} />
>>>>>>> main
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/> 
      </div>
      
    </Router>
  );
}

export default App;
