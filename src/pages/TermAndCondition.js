import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";

const TermAndCondition = () => {
  return (
    <>
     <MetaData title={"Terms And Conditions"} />
      <BreadCrumb title="Terms And Conditions" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='policy'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default TermAndCondition