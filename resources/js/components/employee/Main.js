import React, { useState, useContext, useEffect } from 'react';
import employeeServices from "./Employee";
import Form from "./Form";
import List from "./List";
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import Income from './Income';
import Expense from './Expense';



function Main () {

const [ text, setText ] = useState(null);
const [ amount, setAmount ] = useState(null);
const [ listEmployee, setListEmployee ] = useState([]);

// useEffect(()=>{

  

// },[])

//EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
useEffect(()=>{

  async function fetchDataEmployee(){
    
    const res = await employeeServices.listEmployee();
    console.log(`listの再レンダーされました`);
    setListEmployee(res.data)
  }

  fetchDataEmployee();

},[])

//createアクション
const saveEmployee = async () => {

  const data = {
    text, amount
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
  <div className="maincontainer">
    <div className="top">
      <Header 
          
      />
      <Balance 
          
      />

      <IncomeExpense 
       
      />

        
        
    </div>
      <Form 
      saveEmployee={saveEmployee}
      text={text}
      setText={setText}
      amount={amount}
      setAmount={setAmount}
      listEmployee={listEmployee}
      setListEmployee={setListEmployee}
      saveEmployee={saveEmployee}
      />
      <List 
      saveEmployee={saveEmployee}
      text={text}
      setText={setText}
      amount={amount}
      setAmount={setAmount}
      listEmployee={listEmployee}
      setListEmployee={setListEmployee}
      saveEmployee={saveEmployee}
        />
  </div>



)
      }

export default Main;