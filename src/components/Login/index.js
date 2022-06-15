import { useEffect,useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';


import './index.css'

const Login = () =>{
    const [userName,setUserName] =useState();
    const [passWord,setPassWord] = useState();
    const [loginError,setLoginError] = useState({showLoginError:false,loginErrorMsg:""});
    const [isLoogedIn,setLoginStatus] = useState(false);

    const navigate = useNavigate();


    const onChangeOfUserName = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value)

    }

    const onChangeOfPassword = (event) => {
        setPassWord(event.target.value)
    }

    const onLoginSuccess = jwtToken =>{
        Cookies.set('jwt_token',jwtToken,{expires:2})
        navigate("/");
    }

    const onLoginFailure = (errorMsg) => {
        setLoginError({showLoginError:true,loginErrorMsg:errorMsg})
    }

    const submitLoginForm = async (event) => {
        event.preventDefault();
        const url = 'https://apis.ccbp.in/login/'
        
        // console.log(userName);
        // console.log(passWord);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ username:userName,password:passWord})
        };
        const response = await fetch(url, requestOptions);
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        if(response.ok === true){
            onLoginSuccess(data.jwt_token)
        }
        else{
            onLoginFailure(data.error_msg)
        }

    }

    const renderUserNameField = () =>{

        return(
            <>
            <label htmlFor='username' className='label'>User Name</label>
            <input 
            id="username" 
            type="text"
            className='user-name' 
            placeholder='User Name' 
            value={userName}
            onChange={onChangeOfUserName}
            />
            </>
        )
    }

    const renderPassWordField = () => {
        return(
            <>
            <label htmlFor='password' className='label'>Pass word</label>
            <input 
            id="password" 
            className='user-name' 
            placeholder='Pass Word' 
            value={passWord}
            type="password"
            onChange={onChangeOfPassword}
            />
            </>
        )
    }

    useEffect(()=>{
         const jwtTokenFromCookie = Cookies.get('jwt_token');
         if(jwtTokenFromCookie !== undefined){
             setLoginStatus(true);
         }  
    },[]);
    
    switch(isLoogedIn){
        case true:
            return navigate("/");
            
        case false:
            return(
                <div className="login-page-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="Website Logo"
                className="logo-mobile-view-img"
                />
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" 
                alt="Login Img"
                className='login-image'
                />
                <form className='form-container' onSubmit={submitLoginForm}>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    alt="Website logo"
                    className='logo-desktop-view-img'
                    />
                    <div className='input-container'>{renderUserNameField()}</div>
                    <div className='input-container'>{renderPassWordField()}</div>
                    <button className='login-btn' type="submit">
                        Login
                    </button>
                    {loginError.showLoginError && <p className='login-error-msg'>* {loginError.loginErrorMsg}</p>}
                </form>
            </div>
            )
        default:
            return null;
    }   
}

export default Login