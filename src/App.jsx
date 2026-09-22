import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

function App() {
  const [showProductList, setShowProductList] = useState(false)

  return (
    <div className="background-image">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery, your destination for beautiful
              and healthy plants.
            </p>

            <button
              type="button"
              className="shop-button"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  )
}

export default App
