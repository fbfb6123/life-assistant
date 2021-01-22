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
const [ incomelist, setIncomelist ] = useState([]);
const [ expenselist, setExpenselist ] = useState([]);
const [type, setType] = useState("inc")

// useEffect(()=>{

  

// },[])

//Employeeのincome/expenseにアクセスしてaxiosでレコード取得。
useEffect(()=>{

  async function fetchDataIncome(){
    
    const res = await employeeServices.income();
    console.log(`listの再レンダーされました`);
    setIncomelist(res.data)
  }

  fetchDataIncome();

  async function fetchDataExpense(){
    
    const res = await employeeServices.expense();
    console.log(`expenseレンダーされました`);
    setExpenselist(res.data)
  }

  fetchDataExpense();

},[])

//createアクション
const saveEmployee = async () => {

  const data = {
    text, amount
  }

  const res = await employeeServices.save(data);
  console.log('create!!');
  console.log(res.data);

  const hoge = await employeeServices.income();
    console.log(hoge.data);
    console.log(`list/再レンダー`);
    setIncomelist(hoge.data)

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
      incomelist={incomelist}
      setIncomelist={setIncomelist}
      saveEmployee={saveEmployee}
      type={type}
      setType={setType}
      />
      <List 
      saveEmployee={saveEmployee}
      text={text}
      setText={setText}
      amount={amount}
      setAmount={setAmount}
      incomelist={incomelist}
      setIncomelist={setIncomelist}
      expenselist={expenselist}
      setExpenselist={setExpenselist}
      saveEmployee={saveEmployee}
        />
  </div>



)
      }

export default Main;