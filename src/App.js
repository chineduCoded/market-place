import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen'
import { OrderPage } from './components/OrderPage'
import { InfoPage } from './components/InfoPage'
import { CoreFeatures } from './components/CoreFeatures.jsx'
import { NotFound } from './components/NotFound'

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="features" element={<CoreFeatures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

