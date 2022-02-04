import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen'
import { OrderPage } from './components/OrderPage'
import { InfoPage } from './components/InfoPage'
import { CoreFeatures } from './components/CoreFeatures'
import { NotFound } from './components/NotFound'
import { ThemeProvider } from 'styled-components'
import { Theme } from './components/Theme'
import { UserDetails } from './components/UserDetails'
import { PrivateRoute } from './components/PrivateRoute'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="order"
        element={
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        } />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/userinfo" element={<UserDetails />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="features" element={<CoreFeatures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App

