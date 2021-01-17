import React, { useEffect, useState } from 'react';
import employeeServices from "./Employee";
import List from "./List";

function Form(){

  
  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ age, setAge ] = useState(null);

  useEffect(()=>{

    //EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
    async function fetchDataEmployee(){
      const res = await employeeServices.save();
      console.log(res.data);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])

  // const [ ListRol, setListRol] = useState([]);

  // useEfect(()=>{

  //   async function featchDataRol(){
  //     const res = await employeeServices.list();
  //     console.log(res.data);
  //     setListRol(res.data)
  //   }

  //   featchDataRol();
  // },[])

  const saveEmployee = async () => {

    const data = {
      name, email, age
    }

    const res = await employeeServices.save(data);

    // if(res.success) {
    //   alert(res,message)
    // } else {
    //   alert(res,message)
    // }
  }

  return(
    <div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">Name</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com"
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">Age</label>
          <input type="text" className="form-control" placeholder="1234 Main St"
          onChange={(event)=>setAge(event.target.value)}/>
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

export default Form