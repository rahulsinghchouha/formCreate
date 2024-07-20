import {useState} from "react";
import './App.css';

function App() {

  const[formData,setFormData] = useState({firstName:"",email:"",password:"",category:"Single Room"});

  function formHandler(event)
  {
    const {name,value,checked,type} = event.target;
    setFormData((prev)=>({...prev,[name]:value}));//prev for previous data and then name for equal value
   //console.log(formData.firstName,formData.email,formData.password,formData.category);
  }
  function formSubmit(event){
    event.preventDefault();
    console.log("formData",formData);
  }
 
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
      <label htmlFor="name">Name</label>
      <input
       type="text" 
       name="firstName"
       placeholder="Love"
       value={formData.firstName}
       onChange={formHandler}
       />
     <br></br>
     <label htmlFor="name">Email</label>
      <input
       type="email" 
       name="email"
       placeholder="email"
       value={formData.email}
       onChange={formHandler}
       />
  <br></br>
     <label htmlFor="name">Password</label>
      <input
       type="pass" 
       name="password"
       placeholder="Love"
       value={formData.password}
       onChange={formHandler}
       />

       <br/>
       <label htmlFor="category">Category</label>
       <select
        id="category"
        name="category"       
        value={formData.category}
        onChange={formHandler}
       >
        <option>Single Room</option>
        <option>Double  Room</option>
        <option>1 BHK</option>
        <option>2 BHK</option>
       </select>
<br/>
       <button>save</button>

      </form>
    </div>
  );
}

export default App;
