import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import Container from '../components/Container';

const RefundPolicy = () => {
  return (
    <>
     <MetaData title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1='policy-wrapper py-5 home-wrapper-2'>
      
            <div className='row'>
                <div className='policy'></div>
            </div>
     
      </Container>
    </>
  )
}

export default RefundPolicy