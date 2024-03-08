import { useRef } from 'react';

const ProductForm = ({ product, updateProduct }) => {
  // Create refs for each input field
  const titleRef = useRef(product.title);
  const priceRef = useRef(product.price);
  const statusRef = useRef(product.status);
  const descriptionRef = useRef(product.description);
  const imageRef = useRef(product.image);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      title: titleRef.current.value,
      price: +priceRef.current.value,
      status: statusRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };

    updateProduct(updatedProduct);
  };

  return (
    <div>
      <form className='productForm' onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" defaultValue={product.title} ref={titleRef} />
        <label>Price: </label>
        <input type="text" defaultValue={product.price} ref={priceRef} />
        <label>Status: </label>
        <select defaultValue={product.status} ref={statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <label>Description: </label>
        <textarea defaultValue={product.description} ref={descriptionRef} />
        <label>Image Url: </label>
        <input type="text" defaultValue={product.image} ref={imageRef} />
        <button type="submit">Modify</button>
      </form>
    </div>
  );
};

export default ProductForm;