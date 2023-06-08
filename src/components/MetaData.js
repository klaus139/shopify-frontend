import React from "react";
import { Helmet } from "react-helmet";

const MetaData = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default MetaData;
