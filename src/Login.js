import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, myPassword] = useState('');
    const [message, setMessage ] = useState('');
    const [login,setLogin] = useState({
        email:'',
        password:''
    })
    const verifyLogin = (e)=>{
       
        e.preventDefault();

    if(email === 'atefbad91@gmail.com' && password === '123'){
        alert('welcome');
        setLogin({
            ...login,
            email: email,
            password: password
           });
           setMessage('login complited');
        setEmail('');
        myPassword('');
    }
    else if(email.length === 0 && password.length === 0){
        alert('please enter email and password!');
    }
    else if(email !== 'atefbad91@gmail.com' && password === '123'){
        alert('incorrect email')
    }
    else if(email === 'atefbad91@gmail.com' && password !== '123'){
        alert('incorrect password');
    }
    else{
        alert('Erreur...')
    }
    }
    
    return(
    <div id='LoginForm'>
        <h2>{message}</h2>
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
                type="email" placeholder="E-mali adress" name='email'/>
            <br/>
            <br/>
            <label>Password:</label>
            <br/>
            <br/>
                <input value={password} className="inputLogin" onChange={(e)=>{
                    myPassword(e.target.value);
                }} 
                type="password" placeholder="Password" />
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