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

const [ text, setText ] = useState("");
const [ amount, setAmount ] = useState("");
const [ incomelist, setIncomelist ] = useState([]);
const [ expenselist, setExpenselist ] = useState([]);
const [type, setType] = useState("inc");
const [date, setDate] = useState(new Date);

//先月
const setPrevMonth = () => {
  const year = date.getFullYear();
  const month = date.getMonth()-1;
  const day = date.getDate();
  setDate(new Date(year, month, day));
}
//来月
const setNextMonth = () => {
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  setDate(new Date(year, month, day));
}

//12月1日
const startOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

//1月1日
const endOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

//operate add form and income/expense list
const selectedMonth = date.getMonth() + 1;
const today = new Date();
const thisMonth = today.getMonth() + 1;

//Employeeのincome/expenseにアクセスしてaxiosでレコード取得。
useEffect(()=>{

  const data = {
    text, amount, type, date
  }
  async function fetchDataIncome(){
    
    const res = await employeeServices.income(data);
    console.log(res);
    //resにsetDateとdateカラムが一致するもののみresに代入
    // const filter_include_a = res.filter(function( data ) {
 
    //   //5よりも小さい数値だけを抽出
    //   return res.data == date;
   
    // })
   
    // console.log( filter_include_a );

    
    console.log(date);
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

},[date])

const reset = () => {
  setText("");
  setAmount("");
}

//createアクション
const saveEmployee = async () => {

  const data = {
    text, amount, type, date
  }
  if (text == '' || amount == '0' || !(amount > 0 && amount <= 10000000)) {
    alert ('正しい内容を入力してください')
  } else if ( type === 'inc') {

  const res = await employeeServices.incomesave(data);
  console.log('income/create!!');
  console.log(res.data);

  const hoge = await employeeServices.income();
  console.log(hoge.data);
  console.log(`income/list/再レンダー`);
  setIncomelist(hoge.data)
  reset();
  console.log(`reset!!`);

} else if ( type === 'exp' ) {

  const res = await employeeServices.expensesave(data);
  console.log('expense/create!!');
  console.log(res.data);
  
  const hoge = await employeeServices.expense();
  console.log(hoge.data);
  console.log(`expense/list/再レンダー`);
  setExpenselist(hoge.data)
  reset();
  console.log(`reset!!`);

}
}

return(
  <div className="maincontainer">
    <div className="top">
      <Header 
      date={date}
      setPrevMonth={setPrevMonth}
      setNextMonth={setNextMonth}
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
      type={type}
      setType={setType}
      date={date}
      setDate={setDate}
      selectedMonth={selectedMonth}
      thisMonth={thisMonth}
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
      selectedMonth={selectedMonth}
      thisMonth={thisMonth}
        />
  </div>



)
      }

export default Main;