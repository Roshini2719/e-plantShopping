import { useDispatch } from 'react-redux'
import { addItem } from '../redux/CartSlice'

const products = [
  {
    id: 1,
    name: 'Aloe Vera',
    category: 'Air Purifying',
    price: 15,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d4c9f0',
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Low Maintenance',
    price: 20,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Flowering',
    price: 25,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee',
  },
  {
    id: 4,
    name: 'Monstera',
    category: 'Indoor Plants',
    price: 30,
    image: 'https://images.unsplash.com/photo-1614594575666-0f4f8d8f0c9e',
  },
  {
    id: 5,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 18,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333',
  },
  {
    id: 6,
    name: 'ZZ Plant',
    category: 'Low Maintenance',
    price: 22,
    image: 'https://images.unsplash.com/photo-1632207691146-7e6c4e5e8f7b',
  },
]

function ProductList() {
  const dispatch = useDispatch()

  return (
    <section className="product-list">
      <h2>Our Plants</h2>

      <div className="products">
        {products.map((product) => (
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
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
