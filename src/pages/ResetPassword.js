import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";

const ResetPassword = () => {
  return (
    <>
    <MetaData title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className='container-xxl'>
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                
               
                
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="Confpassword"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0">Ok</button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword