import React from "react";

import errorImage from "../../assets/404.jpg";

const NotFound = () => {
  // if any page returns not found then this component will render like error.
  return (
    <div className='text-center'>
      <img src={errorImage} width='500px' alt='' />
    </div>
  );
};

export default NotFound;
