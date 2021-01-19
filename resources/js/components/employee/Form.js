import React from 'react';
import employeeServices from "./Employee";

// function Form(){

  
//   const [ name, setName ] = useState(null);
//   const [ email, setEmail ] = useState(null);
//   const [ age, setAge ] = useState(null);
//   const [ listEmployee, setListEmployee ] = useState([]);

  export const Form = ({ text, setText, amount, setAmount, listEmployee, setListEmployee}) => {
  

  const saveEmployee = async () => {

    const data = {
      text, amount
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
          <label htmlFor="firstName">内容</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={(event)=>setText(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">金額</label>
          <input type="text" className="form-control" placeholder="1234 Main St"
          onChange={(event)=>setAmount(event.target.value)}/>
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
            <th scope="col">収入</th>
           
          </tr>
        </thead>
        <tbody>

        {
          listEmployee.map((income)=>{
            return(
              <tr key={income.id}>
                <td>{income.id}</td>
                <td>{income.text}</td>
                <td>{income.amount}</td>
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