import { useState } from 'react'
import Header from './componets/Header'
import './App.css'
import Slider from './componets/Slider'
import ProductionHouse from './componets/ProductionHouse'
import GenreMovieList from './componets/GenreMovieList'

function App() {

  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </>
  )
}

export default App
