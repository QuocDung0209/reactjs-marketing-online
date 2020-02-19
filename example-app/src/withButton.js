import React, { useState } from "react";

const withButton = WrappedComponent => {
  return function HOC (props) {
    const [state, setState] = useState(true);

    const onChange = value => {
      setState(value);
    };
    console.log(onChange)
    return <WrappedComponent onChange={onChange} open={state} {...props} />;
  };
};

export default withButton;
