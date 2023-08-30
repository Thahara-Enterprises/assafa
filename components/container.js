import React from 'react';

const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto sm:p-3 xs:p-3 xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
