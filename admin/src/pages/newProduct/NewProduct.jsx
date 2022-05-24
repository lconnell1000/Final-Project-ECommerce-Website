import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
  const [ inputs, setInputs] = useState({});
  const [ file, setFile] = useState(null);
  const [ category, setCategory]= useState([]);

  const handleChange = (e) => {
   setInputs((prev) => {
     return{...prev, [e.target.name]: e.target.value };
   });
  };

  const handleCategories = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleClick = (e) => {

  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange = {e => setFile(e.target.files)[0]}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="New Product Name" onChange = {handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="New Product Price" onChange = {handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="description" type="text" placeholder="New Product Description" onChange = {handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Example: pants, womens" onChange = {handleCategories}/>
        </div>
        <div className="addProductItem">
          <label>In Stock?</label>
          <select name="inStock" onChange={handleChange}>
            <option value = "true">Yes</option>
            <option value = "false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
