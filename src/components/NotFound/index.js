import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () =>{
    return(
        <div className="not-found-container">
            <img src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png" alt="Not Found" className='not-found-img'/>
            <h1>Oops! The page you're looking for can't be found.</h1>
            <Link to="/" className='go-to-home-link'>
                Go to Home Page
            </Link>
        </div>
    )
}

export default NotFound