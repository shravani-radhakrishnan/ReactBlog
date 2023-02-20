import './App.css';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/blogs' element={<BlogsPage/>}></Route>
          <Route path='/blogs/:blogId' element={<BlogPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/' element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
