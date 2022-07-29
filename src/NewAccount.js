import { Link } from "react-router-dom";
import React, {useState} from "react";
import Login from "./Login";
//import axios from "axios";
const NewAccount = () => {

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [pass,setPass ] = useState('');

    const [login, setLogin] = useState(
        {user:'',
         email:'',
         password:'',
         pass:''
        });

    const loginUser = (e) =>{

        e.preventDefault();
        setLogin({...login,
            user: user,
            email: email,
            password: password,
            pass: pass
        });

        setUser('');
        setEmail('');
        setPassword('');
        setPass('');

    }
    return(
    <div>
        <form>
            <fieldset>
                <legend><h1>Create New Account:</h1></legend>
            <label>
                User Name: <input value={user} placeholder='full name' onChange={(e)=>{
                    setUser(e.target.value)
                }}/>
            </label>
            <br/>
            <br/>
            <label>E-mail  
                <input  type="text" placeholder="exemple@gmail.com" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </label>
            <br/>
            <br/>
            <label>
                Password: <input  type="password" placeholder="your Password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </label>
            <br/>
            <br/>
            <label>
                confirmer Password: <input type="password" placeholder="Confirmer Password" value={pass} onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
            </label>
            <br/>
            <br/>
            <button onClick={loginUser} >Create Account </button>
            <br/>
            <Link to="/" > Back Home</Link>
            </fieldset>
        </form>
        <div className='login' style={{}}><Login login={login} /></div>
    </div>
    )
}
export default NewAccount;
/*
<button type="button" onClick={()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts/2').then((result)=>{
                    console.log(result.data);
                });
            }}
*/