import React from 'react'
import { Cart } from './pages/Cart'
import Item from './components/Item'
import Wishlist from './pages/Whislist'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header'


function App() {
  return (
    <div className='flex space-y-2 flex-col relative'>
      <Header/>
      <Item/>
      <Login/>
      <Signup/>
      <Cart/>
      <Wishlist/>

    </div>
  )
}

export default App