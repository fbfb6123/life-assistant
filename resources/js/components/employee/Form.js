import React from 'react';
import employeeServices from "./Employee";

// function Form(){

  
//   const [ name, setName ] = useState(null);
//   const [ email, setEmail ] = useState(null);
//   const [ age, setAge ] = useState(null);
//   const [ listEmployee, setListEmployee ] = useState([]);

  export const Form = ({ name, setName, email, setEmail, age, setAge, listEmployee, setListEmployee}) => {
  

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

  return(
    <div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">Name</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com"
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">Age</label>
          <input type="text" className="form-control" placeholder="1234 Main St"
          onChange={(event)=>setAge(event.target.value)}/>
        </div>
      </div>



      <div className="row">
        <div className="col-md-6 mb-3">
          <button
          className="btn btn-primary btn-block" type="submit"
          onClick={()=>saveEmployee()}>Save</button>
        </div>
      </div>
      

      <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>

        {
          listEmployee.map((person)=>{
            return(
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
            </tr>
            )
          })
        }
        
        </tbody>
      </table>
    </section>
    </div>

    
  )
}
export default Form;