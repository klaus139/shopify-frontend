import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <MetaData title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type='text' name='name' placeholder='Name'/>
                <CustomInput type='email' name='email' placeholder='Email' />
                <CustomInput type='tel' name='mobile' placeholder='Mobile NUmber' />
                <CustomInput type='password' name='password' placeholder='Password' />
                
               
               
                
                <div className="mt-3">
                  
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0">Create</button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default Signup;
