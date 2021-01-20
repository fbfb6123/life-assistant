import React, { useEffect, useState } from 'react';
import employeeServices from "./Employee";

function Expense(){

  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(()=>{

    //EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
    async function fetchDataEmployee(){
      const res = await employeeServices.listEmployee();
      console.log(res.data);
      console.log(`Income/再レンダーされました`);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])

  return (
    <section>
       <div className="table">
        <div className="thead-dark">
          <div className="thead-dark-item">
            <div className="thead-dark-text">Name</div>
            <div className="thead-dark-amount"></div>
          </div>
        </div>
        <div className="tbody">

        {
          listEmployee.map((income)=>{
            return(
              <ul key={income.id}>
                <li>{income.text}</li>
                <li>{income.amount}</li>
              </ul>
            )
          })
        }
        
        </div>
      </div>
    </section>
  )
}

export default Expense;