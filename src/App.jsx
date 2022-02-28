import { useState, useEffect } from 'react'
import logo from './logo.svg'
import data from './data'
import './App.css'


function Nav(props){
  return (
    <div className="p-6 shadow-sm">
      <div className="float-right flex">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative bottom-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {props.itemCount > 0 && <span className="bg-green-500 text-white px-2 rounded-full">{props.itemCount}</span>}
      </div>
    </div>
  )
}


function App(){
  // activeSwatch = ''
  let [activeSwatch, setSwatch] = useState('blue')
  let [activeImage, setActiveImage] = useState('')
  let [cartItems, setCartItems] = useState(0)

  const switchColor = (e) => {
    setSwatch(e.target.name)
  }

  const addToCart = () => {
    setCartItems(cartItems += 1)
  }

  useEffect(() => {
    setActiveImage(data[activeSwatch].image)
  }, [activeSwatch])

  return (
    <>
      <Nav itemCount={cartItems}/>
      <div className="flex space-x-4 items-center justify-center translate-y-20">
        <div className="h-72 w-72">
          <img className="" src={activeImage} alt="" />
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-semibold">Programmer socks</h1>
          <div className="">
            <p className="font-semibold">Price</p>
            <p className="">$12.99 USD</p>
          </div>
          <div>
            <p className="w-80 text-sm font-bold">Description</p>
            <p className="w-80 text-sm font-semibold">For all the nerds or geeks in your life (you might be one yourself) these nerd socks are perfect, ironically cool, and hilarious; T</p>
          </div>
          <div>
            <p className="font-semibold">Colors: {activeSwatch}</p>
            <div className="flex flex-row space-x-4">
              <button className="bg-green-300 h-10 w-10 rounded-full" name="green" onClick={switchColor}></button>
              <button className="bg-blue-300 h-10 w-10 rounded-full" name="blue" onClick={switchColor}></button>
            </div>
          </div>
          <button onClick={addToCart} className="bg-orange-500 rounded-sm py-2 text-white font-semibold">Add to Cart</button>
        </div>
      </div>
    </>
  )
}
export default App
