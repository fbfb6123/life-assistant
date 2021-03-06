import React, { useState, useContext, useEffect } from 'react';
import employeeServices from "./Employee";
import Form from "./Form";
import List from "./List";
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import totalIncomeCalc from './TotalIncome';
import totalExpenseCalc from './TotalExpense';


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
  setDate(new Date(year, month));
}
//来月
const setNextMonth = () => {
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  setDate(new Date(year, month));
}

//operate add form and income/expense list
const selectedMonth = date.getMonth() + 1;
const today = new Date();
const thisMonth = today.getMonth() + 1;

const todays = date;
const year = todays.getFullYear();
const month = todays.getMonth()+1;


const data = {
  text, 
  amount, 
  type, 
  date, 
  year, 
  month,
};


useEffect(()=>{
  fetchDataIncome();
  fetchDataExpense();
},[date])

  

async function fetchDataIncome(){
  const res = await employeeServices.income(data);
  console.log(`incomeレンダー`);
  setIncomelist(res.data)
}

async function fetchDataExpense(){
    
  const res = await employeeServices.expense(data);
  console.log(`expenseレンダー`);
  setExpenselist(res.data)
}

const reset = () => {
  setText("");
  setAmount("");
}

//createアクション
const saveEmployee = async () => {

  if (text == '' || amount == '0' || !(amount > 0 && amount <= 10000000)) {
    alert ('正しい内容を入力してください')
  } else if ( type === 'inc') {

  const res = await employeeServices.incomesave(data);
  console.log(res);
  console.log('income/create!!');
  console.log(res.data);

  const incomedata = await employeeServices.income(data);
  console.log(`income/list/再レンダー`);
  setIncomelist(incomedata.data)
  reset();
  console.log(`reset!!`);

} else if ( type === 'exp' ) {

  const res = await employeeServices.expensesave(data);
  console.log('expense/create!!');
  console.log(res.data);
  
  const expensedata = await employeeServices.expense(data);
  console.log(`expense/list/再レンダー`);
  setExpenselist(expensedata.data)
  reset();
  console.log(`reset!!`);

}
}

const deleteEmployee = async (data) => {
  const res = await employeeServices.expensedelete(data);
  console.log('expense/delete!!');
  fetchDataExpense();
}

const incomeDeleteEmployee = async (data) => {
  const res = await employeeServices.incomedelete(data);
  console.log('income/delete!!');
  fetchDataIncome();
}

const incomeTotal = totalIncomeCalc(incomelist);
const expenseTotal = totalExpenseCalc(expenselist);

return(
  <div className="maincontainer">
    <div className="top">
      <Header 
      date={date}
      setPrevMonth={setPrevMonth}
      setNextMonth={setNextMonth}
      />
      <Balance 
      incomeTotal={incomeTotal}
      expenseTotal={expenseTotal}
      />
      <IncomeExpense 
      incomeTotal={incomeTotal}
      expenseTotal={expenseTotal}
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
      incomeDeleteEmployee={incomeDeleteEmployee}
      deleteEmployee={deleteEmployee}
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

)}

export default Main;