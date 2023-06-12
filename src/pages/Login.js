import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
     <MetaData title={"Login"} />
      <BreadCrumb title="Login" />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div className=''>
                            <input type='email' name='email' placeholder='email' className='form-control' />
                        </div>
                        <div className='mt-1'>
                            <input type='password' name='password' placeholder='password' className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <Link to='/forgot-password'>Forgot Password?</Link>
                            <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                <button className='button border-0'>Login</button>
                                <Link className='button signup'>SignUp</Link>
                            </div>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login