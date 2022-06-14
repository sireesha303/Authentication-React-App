import { useState } from 'react';
import './index.css'

const Login = () =>{
    const [userName,setUserName] =useState();
    const [passWord,setPassWord] = useState();

    const onChangeOfUserName = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value)

    }

    const onChangeOfPassword = (event) => {
        setPassWord(event.target.value)
    }
    const submitLoginForm = async (event) => {
        event.preventDefault();
        // const {username, password} = this.state
        console.log(userName)
        console.log(passWord)
        const userDetails = {userName, passWord}
        const url = 'https://apis.ccbp.in/login'
        const options = {
        method: 'POST',
        headers: {
            mode: 'no-cors'
        },
        body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)

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
                
            </form>
        </div>
    )
}

export default Login