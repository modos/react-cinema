import React from 'react';
import { render } from "react-dom"
import { BrowserRouter, Routes, Route }from "react-router-dom"
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'
export default function App() {

    const rootElement = document.getElementById("root");
    render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>,
        rootElement
      )
}
