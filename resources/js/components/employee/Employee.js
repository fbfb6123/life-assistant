const employee = {};

//...//

employee.listEmployee = async () => {
  const res = await axios.get('api/employee/list')
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


export default employee