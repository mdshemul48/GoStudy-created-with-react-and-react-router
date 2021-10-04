import React from "react";

import errorImage from "../../assets/404.jpg";

const NotFound = () => {
  return (
    <div className='text-center'>
      <img src={errorImage} width='500px' alt='' />
    </div>
  );
};

export default NotFound;
