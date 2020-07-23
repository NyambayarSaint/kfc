import React, {useEffect, useState} from 'react'
import axios from 'axios'
import prettyError from '../../tools/prettyError'

const CoRegister = () => {

    const [error, setError] = useState({status: false, message: <p>No Error</p>})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post(localStorage.getItem('url')+'/user/register', {username: e.target.username.value,email: e.target.email.value,password: e.target.password.value})
        if(!res.data.error) return document.location.href = "/user"
        setError({status: true, message: prettyError(res.data.message)})
    }
    
    return (
        <div style={{display:'flex',alignItems:'center',height:'100vh'}}>
            <form className="form-signin mt-5" onSubmit={handle} style={{width:'100%',maxWidth: 330, padding: 15, margin: '0px auto'}} > 
                <h1 className="h3 mb-3 font-weight-normal text-center">Please sign up</h1>
                <label htmlFor="inputEmail" className="sr-only">Username</label>
                <input type="text" name="username" className="form-control" placeholder="Username" required autofocus />
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Email address" required autofocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                {error.status ? <div class="alert alert-danger mt-4" role="alert">{error.message}</div> :null}
                <p className="mt-5 mb-3 text-muted text-center">© 2019-2020</p>
            </form>
        </div>
    );
};

export default CoRegister;