import ProductForm from "./ProductForm";
import AddNewProductForm from "./AddNewProductForm";

// Section 3
const Inventory = ({ products, updateProduct, addProduct }) => {
  return (
    <div>
      <h2>Inventory</h2>
      {products.map((product) => (
        <ProductForm
          key={product.id}
          product={product}
          updateProduct={updateProduct}
        />
      ))}
      <AddNewProductForm addProduct={addProduct} />
    </div>
  );
};

export default Inventory;