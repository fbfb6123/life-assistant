import React from 'react';
import employeeServices from "./Employee";

  export const Form = ({ text, setText, amount, setAmount, listEmployee, setListEmployee, saveEmployee}) => {

  return(
    <div className="form-container">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">内容</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={(event)=>setText(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">金額</label>
          <input type="text" className="form-control" placeholder="1234 Main St"
          onChange={(event)=>setAmount(event.target.value)}/>
        </div>
      </div>



      <div className="row">
        <div className="col-md-6 mb-3">
          <button
          className="btn btn-primary btn-block" type="submit"
          onClick={()=>saveEmployee()}>Save</button>
        </div>
      </div>
      

      
    </div>

    
  )
}
export default Form;