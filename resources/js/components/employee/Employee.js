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


export default employee