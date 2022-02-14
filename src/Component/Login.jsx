import React from 'react'
import '../Form.css';

function Login() {
    return (
        <div className='Form'>
            <form action="" className='border border-1 px-3 py-3 shadow-lg bg-warning' >
                <h2 className='text-center'>Login</h2>
                <div className='ii'>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-2 btn-a">LOGIN</button>
                    <div class="d-flex flex-column py-2 ">
						<a href="#" className="btn btn-outline-dark me-2 bg-secondary btn-a">
                            <i className="fa fa-facebook-square p-2"></i>
                                <span className="auth-form__socials-title">
                                    Login with facebbok
                                </span>
                            </a>
						<a href="#" className="btn btn-outline-dark bg-secondary btn-a">
                            <i className="fa fa-google p-2"></i>
                                <span className="auth-form__socials-title">
                                    Login with google
                                </span>
                            </a>
					</div>
                </div>
            </form>
        </div>
    )
}

export default Login