import React from "react";

const Form = () => {
  return (
    <div className="form-container"> 
      <form className="form-spline">
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;