import './App.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navi = useNavigate();
    return(
        <div id='headerDiv'>
            <h1>Welcome To Our Web Site</h1>
            <h3>Here you can experience new things, so please enjoy your time.</h3>
            <div>
                <button className='buttonH' onClick={() => navi('/Login')}>Login Page</button>
                <button className='buttonH' onClick={() => navi('/NewAccount')}>Create Account</button>
            </div>
        </div>
    )
}
export default Home;
/*
<a href="/Login">go to</a>
<Link to="/Login" >Login</Link>
<Link to="/NewAccount" >New Account</Link>
*/