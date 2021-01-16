const baseUrl = "http://localhost:8000/api/employee"

const employee = {};

//...//

employee.listEmployee = async () => {
  const urlList = baseUrl+"/list"
  const res = await  axios.get(urlList)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


// employee.list = async () => {
//   const urlList = baseUrl+"/create"
//   const res = await axios.get(urlList)
//   .then(response=>{ return response.data; })
//   .catch(error=>{ return error; })
//   return res;
// }

//Formのcreateaction定義
employee.save = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


export default employee