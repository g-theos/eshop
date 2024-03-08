import { useRef } from 'react';

const AddNewProductForm = ({ addProduct }) => {
  // Create refs for each input field
  const titleRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      title: titleRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };

    // Call the addProduct function with the new product data
    addProduct(newProduct);

    // Reset form fields after submission
    event.target.reset();
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <form className='productForm' onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          ref={titleRef}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          ref={priceRef}
          step="0.01"
          required
        />

        <label>Status:</label>
        <select
          name="status"
          ref={statusRef}
          required
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <label>Description:</label>
        <textarea
          name="description"
          ref={descriptionRef}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          ref={imageRef}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddNewProductForm;