const baseUrl = "http://localhost:8000/api/employee"
//"http://localhost:8000/api/employee" local用

const employee = {};

//...//
//List一覧表示
//Main.js/await employeeServices.income()でアクセス
employee.income = async (data) => {
  const urlList = baseUrl+"/income"
  const res = await axios.post(urlList,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//Main.js/await employeeServices.expense()でアクセス
employee.expense = async () => {
  const urlList = baseUrl+"/expense"
  const res = await  axios.get(urlList)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//Formのcreateaction定義
//await employeeServices.incomesave(data)でアクセス
employee.incomesave = async (data) => {
  const urlSave = baseUrl+"/incomcreate"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//await employeeServices.expensesave(data)でアクセス
employee.expensesave = async (data) => {
  const urlSave = baseUrl+"/expensecreate"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


export default employee