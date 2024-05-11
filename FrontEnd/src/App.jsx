import { useState } from 'react'
import Carousel from './Components/Carousel/Carousel'
import './App.css'
import Nav from './Components/Nav/Nav'
import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'


function App() {

  return (
    <>
      <Nav />
      <Carousel />
      <Categories />
      <Products/>
    </>
  )
}

export default App
