const baseUrl = "http://localhost/api/employee"
//"http://localhost:8000/api/employee" local用

const employee = {};

//...//
//List一覧表示
//await employeeServices.listEmployee()でアクセス
employee.listEmployee = async () => {
  const urlList = baseUrl+"/list"
  const res = await  axios.get(urlList)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


//Formのcreateaction定義
//await employeeServices.save(data)でアクセス
employee.save = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


export default employee