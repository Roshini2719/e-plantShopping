import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/CartSlice'

const products = [
  {
    id: 1,
    name: 'Aloe Vera',
    category: 'Air Purifying',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1596547609652-9cf5d8d4c9f0',
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Low Maintenance',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Flowering',
    price: 25,
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee',
  },
  {
    id: 4,
    name: 'Monstera',
    category: 'Indoor Plants',
    price: 30,
    image:
      'https://images.unsplash.com/photo-1614594575666-0f4f8d8f0c9e',
  },
  {
    id: 5,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1572688484438-313a6e50c333',
  },
  {
    id: 6,
    name: 'ZZ Plant',
    category: 'Low Maintenance',
    price: 22,
    image:
      'https://images.unsplash.com/photo-1632207691146-7e6c4e5e8f7b',
  },
]

function ProductList() {
  const dispatch = useDispatch()

  // Stores the IDs of products that have already been added to the cart.
  const [addedItems, setAddedItems] = useState([])

  const categories = [...new Set(products.map((product) => product.category))]

  const handleAddToCart = (product) => {
    dispatch(addItem(product))

    setAddedItems((previousItems) => [
      ...previousItems,
      product.id,
    ])
  }

  return (
    <section className="product-list">
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div className="category-section" key={category}>
          <h2>{category}</h2>

          <div className="products">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const isAdded = addedItems.includes(product.id)

                return (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <h3>{product.name}</h3>

                    <p>{product.category}</p>

                    <p>${product.price}</p>

                    <button
                      type="button"
                      disabled={isAdded}
                      onClick={() => handleAddToCart(product)}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                )
              })}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductList
