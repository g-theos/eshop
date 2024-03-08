import Product from "./Product";

// Section 1
const ProductsList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsList;