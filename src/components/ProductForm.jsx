import { useEffect, useState } from "react";

function ProductForm() {
  const [productDataRealTime, setProductDataRealTime] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  const [productCreate, setProductCreate] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  // Handling input
  const handleInputChange = (event) => {
    console.log(event.target); // ค่าของ event.target  <input id="name" name="name" type="text" placeholder="Enter name here" value="asdasdszdxzzxczxczxasd">
    const { name, value } = event.target; // เอา Prop มาใส่แบบ destructuring assignment

    setProductDataRealTime({
      ...productDataRealTime, // ก้อบค่าเก่ามา
      [name]: name === "price" ? Number(value) : value, // แล้ว reassgign onChange ค่าใหม่ ถ้า key เป็น price ให้แปลง value จาก input ใก้กลายเป็นเลข ถ้าkey เป็นอันอื่นให้เป็นสตริงเหมือนเดิม
    });
  };

  // Create Product
  const createProduct = (event) => {
    event.preventDefault(); // กัน refresh
    setProductCreate(productDataRealTime); // Copy data to productCreate
    alert(JSON.stringify(productDataRealTime));
  };

  return (
    <form className="post-form" onSubmit={createProduct}>
      <h1>Create Product Form</h1>

      {/* Display the real-time data for debugging */}
      <h2>Real-time Data: {JSON.stringify(productDataRealTime)}</h2>

      <div className="input-container">
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productDataRealTime.name}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Image URL:
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image URL here"
            value={productDataRealTime.image}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Price:
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productDataRealTime.price}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Description:
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            value={productDataRealTime.description}
            onChange={handleInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Create Product</button>
      </div>

      {/* Display the productCreate data after submission */}
      <h2>Created Product Data: {JSON.stringify(productCreate)}</h2>
    </form>
  );
}

export default ProductForm;
