import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import NotFound from './not-found';
import Home from './home';
import ContentCategory from './home/components/contentCategory';
import ContentDetails from './home/components/contentCategory/components/contentDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/content-category' element={<ContentCategory />} />
        <Route path='/content-details' element={<ContentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;