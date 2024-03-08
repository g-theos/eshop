import Inventory from './Components/Inventory';
import ProductsList from './Components/ProductsList';
import ShoppingCart from './Components/ShoppingCart';
import { InitialProducts } from './InitialProducts';
import { useState, useEffect } from 'react';

const App = () => {
  // State for products and shopping cart
  const [products, setProducts] = useState(InitialProducts);
  const [cart, setCart] = useState([]);

  // Fetch products from localStorage on initial render
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || products;
    setProducts(storedProducts);

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []); 

  // Update localStorage whenever products or cart change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingCartItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      // Product is already in the cart, update quantity
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Product is not in the cart, add it
      const newCartItem = { product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
  };

  // Function to update a product's properties
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );

    setProducts(updatedProducts);

    // Update the cart if the product is in it
    const updatedCart = cart.map((item) =>
      item.product.id === updatedProduct.id
        ? { ...item, product: updatedProduct }
        : item
    );

    setCart(updatedCart);
  };

  // Function to add a new product
  const addProduct = (newProduct) => {
    // Assign a unique id to the new product
    newProduct.id = Date.now();

    setProducts([...products, newProduct]);
  };

  return (
    <>
      <h1>FISH STORE</h1>
      <div className="basic">
        <ProductsList products={products} addToCart={addToCart} />
        <ShoppingCart cart={cart} />
        <Inventory
          products={products}
          updateProduct={updateProduct}
          addProduct={addProduct}
        />
      </div>
    </>
  );
};

export default App;
