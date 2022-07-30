import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
const Login = (prop) => {

    const [email, setEmail] = useState('');
    const [password, myPassword] = useState('');
    const [login,setLogin] = useState({
        email:'',
        password:''
    })
    const verifyLogin = (e)=>{
       
        e.preventDefault();

    if(email === prop.login.email && password === prop.login.password){
        alert('welcome '+prop.login.user);
        setLogin({
            ...login,
            email: email,
            password: password
           });
        setEmail('');
        myPassword('');
    }
    else if(email.length === 0 && password.length === 0){
        alert('please enter your email and password!');
    }
    else if(email !== prop.login.email && password === prop.login.password){
        alert('incorrect email')
    }
    else if(email === prop.login.email && password !== prop.login.password){
        alert('incorrect password');
    }
    else{
        alert('Erreur...')
    }
    }
    
    return(
    <div id='LoginForm'>
        <div id="containerForm">
            <form >
                <h1>Login:</h1>
            <br/>
            <br/>
            <label>E-mail:</label>
            <br/> 
            <br/>
                <input autoFocus value={email} className="inputLogin" onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                type="email" placeholder="E-mali adress" required/>
            <br/>
            <br/>
            <label>Password:</label>
            <br/>
            <br/>
                <input value={password} className="inputLogin" onChange={(e)=>{
                    myPassword(e.target.value);
                }} 
                type="password" placeholder="Password" required/>
           <br/>
           <br/>
           <br/>
            <button className="buttonLogin" onClick={verifyLogin}>login</button>
            <br/>
            <br/>
            <button className='buttonLogin' type="reset">cancel</button>
            <br/>
            <br/>
            <Link to="/" >Back Home</Link>
            </form>
            </div>
            
    </div>
    )  
 }
export default Login;