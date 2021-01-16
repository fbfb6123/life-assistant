import React, { useEffect, useState } from 'react';
import employeeServices from "./Employee"
import { Link } from "react-router-dom";

function List(){

  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(()=>{

    //EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
    async function fetchDataEmployee(){
      const res = await employeeServices.listEmployee();
      console.log(res.data);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])

  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>

        {
          listEmployee.map((person)=>{
            return(
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
            </tr>
            )
          })
        }
        
        </tbody>
      </table>
    </section>
  )
}

export default List;