import React, { useState, useContext, useEffect } from 'react';
import employeeServices from "./Employee";
import Form from "./Form";
import List from "./List";



function Main () {

const [ name, setName ] = useState(null);
const [ email, setEmail ] = useState(null);
const [ age, setAge ] = useState(null);
const [ listEmployee, setListEmployee ] = useState([]);

// useEffect(()=>{

  

// },[])

//EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
useEffect(()=>{

  //EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
  async function fetchDataEmployee(){
    
    const res = await employeeServices.listEmployee();
    console.log(res.data);
    console.log(`listの再レンダーされました`);
    setListEmployee(res.data)
  }

  fetchDataEmployee();

},[])

//createアクション
const saveEmployee = async () => {

  const data = {
    name, email, age
  }

  const res = await employeeServices.save(data);
  console.log('create!!');
  console.log(res.data);

  const hoge = await employeeServices.listEmployee();
    console.log(hoge.data);
    console.log(`list/再レンダー`);
    setListEmployee(hoge.data)

}

return(
<div className="top">
        <Form 
          saveEmployee={saveEmployee}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          age={age}
          setAge={setAge}
          listEmployee={listEmployee}
          setListEmployee={setListEmployee}
        />
        {/* <List 
          incomeTotal={incomeTotal}
          expenseItems={expenseItems}
        /> */}
      </div>

)
      }

export default Main;