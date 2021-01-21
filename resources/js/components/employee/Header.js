import React from 'react';
import employeeServices from "./Employee";

// function Form(){

  
//   const [ name, setName ] = useState(null);
//   const [ email, setEmail ] = useState(null);
//   const [ age, setAge ] = useState(null);
//   const [ listEmployee, setListEmployee ] = useState([]);

  export const Header = ({ }) => {
  

  const saveEmployee = async () => {

    const data = {
      name, email, age
    }

    const res = await employeeServices.save(data);
    console.log('create!!');
    console.log(res.data);

    const hoge = await employeeServices.listEmployee();
      console.log(hoge.data);
      console.log(`list/再レンダー`);
      setListEmployee(hoge.data)
    
  }

  return (
    <div className="container">
      <div>
        ヘッダー   
      </div>
    </div>
  );
}
export default Header;