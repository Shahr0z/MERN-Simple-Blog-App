import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import React, { useEffect } from 'react';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogsDetail from './components/BlogsDetail';
import AddBlog from './components/AddBlog';
import { useDispatch } from 'react-redux';
import { authActions } from './store';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const checkLogin = () => {
    const isLoggedIn = localStorage.getItem('isLogin')
    if (!isLoggedIn) {
      navigate('/auth')
    } else {
      navigate('/blogs')
      dispatch(authActions.login())
    }
  }
  useEffect(() => {
    checkLogin()
  }, [])
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogsDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
