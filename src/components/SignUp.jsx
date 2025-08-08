import { useState } from "react"
import { Navigate } from "react-router-dom";
import authService from "../services/Auth" 
const SignUp = ()=>{


const handleSubmit = async(e)=>{
e.preventDefault();
try {
    const User = await  authService.signup(Data);
      
    } catch (err) {
      
    }


}
const handleChange =(e)=>{
    setData({...Data,[e.target.name]: e.target.value})
}

  const [Data, setData] = useState({
    username: "",
    password: "",
    
  });



return (<>


<div>
    <form onSubmit={handleSubmit}>
<label htmlFor="username">UserName</label>
<input onChange={handleChange} type="text" name="username" id="" value={Data.username}/>


<label htmlFor="password">password</label>
<input onChange={handleChange} type="password" name="password" id="" value={Data.password}/>







<button >Sign Up</button>


</form>
</div>
</>
)
}



export default SignUp ;