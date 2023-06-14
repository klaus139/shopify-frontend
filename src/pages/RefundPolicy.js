import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";

const RefundPolicy = () => {
  return (
    <>
     <MetaData title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
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

export default RefundPolicy