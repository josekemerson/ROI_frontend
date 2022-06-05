import React, { useEffect, useState } from "react";
import "../Main/Main.css";
import Sidebar from "../Sidebar/Sidebar";

const axios = require("axios");
function AddPatentCategory() {
    const data = {};


  const [category, setCategory] = useState(null);


  const handleCategory = (event) => {
    setCategory(event.target.value);
  };


  const handleSubmit = async () => {
 
      const data = {
        category: category,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/AddPatentcategory",
          data
        );
        if (response.status === 200) {
          //console.log("Sucessfull");
         alert("Category Added")
        } else {
          console.log("Failed");
        }
      } catch (e) {
        console.log("Error");
      }
    window.location.reload(true);
  
  };
  return (
    <div>
      <div className="d-flex w-100 h-100">
        <Sidebar />
        <main>
            <h5 style={{ marginLeft: "50px", marginTop:"80px" , color:"#ff8533"}} ><b>Add Patent Category</b></h5>
          <input type="text" style={{ marginLeft: "50px", marginTop:"25px", width:"50%" }}
            placeholder="Enter the Category"
            onChange={handleCategory} /> <br />
          <input type="button"  style={{ marginLeft: "50px",  width:"50%" }} value="Submit"
           onClick={handleSubmit} />
        </main>
      </div>
    </div>
  );
}

export default AddPatentCategory;
