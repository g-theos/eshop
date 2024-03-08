// Product component
const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    if (product.status === 'available') {
      addToCart(product);
    }
  };

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Price: €{product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={product.status === 'unavailable'}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
