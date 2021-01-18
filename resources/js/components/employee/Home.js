import React, { useEffect, useState } from 'react';
import employeeServices from "./Employee"


function Home(){

const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(()=>{

    //EmployeeのlistEmployeeにアクセスしてaxiosでレコード取得。setListEmployeeでstateをセット
    async function fetchDataEmployee(){
      const res = await employeeServices.listEmployee();
      console.log(res.data);
      console.log(`再レンダーされました`);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])


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

}

  export default Home;